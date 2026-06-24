<script lang="ts">
  import { env } from '$env/dynamic/public';
  import type { LandingPage } from '$lib/data/landingPages';
  import { trackConversionEvent } from '$lib/services/tracking';
  import AcquisitionSections from './AcquisitionSections.svelte';
  import IconGlyph from './IconGlyph.svelte';

  export let page: LandingPage;

  let formStatus = '';
  let isSubmitting = false;

  const isAcquisitionPage = page.slug === 'captacao-a';

  const getLeadEndpoint = () => env.PUBLIC_LEAD_ENDPOINT?.trim() ?? '';

  const submitLead = async (event: SubmitEvent) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const leadPayload = {
      ...Object.fromEntries(formData.entries()),
      page_slug: page.slug,
      product_name: page.productName,
      test_name: page.testName,
      variant: page.variant
    };

    trackConversionEvent('lead_form_submit', page);

    const endpoint = getLeadEndpoint();

    if (!endpoint) {
      formStatus = 'Lead capturado para rastreamento. Configure PUBLIC_LEAD_ENDPOINT para enviar os dados ao CRM.';
      return;
    }

    try {
      isSubmitting = true;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(leadPayload),
        keepalive: true
      });

      if (!response.ok) {
        throw new Error('Lead endpoint failed.');
      }

      form.reset();
      formStatus = 'Interesse enviado. O time comercial F10 pode seguir com a demonstração.';
    } catch {
      formStatus = 'Não foi possível enviar agora. Use o botão de WhatsApp para continuar o atendimento.';
    } finally {
      isSubmitting = false;
    }
  };

  const trackPrimaryCta = () => trackConversionEvent('primary_cta_click', page);
</script>

{#if isAcquisitionPage}
  <AcquisitionSections page={page} />
{:else}
  <div class="sections" style={`--accent: ${page.theme.accent};`}>
    <section class="section-shell">
      <p class="section-kicker">Dor central</p>
      <h2 class="section-title">{page.sections.pain}</h2>
      <p class="section-copy">{page.sections.promise}</p>

      <div class="card-grid">
        {#each page.sections.benefits as benefit}
          <article class="card">
            {#if benefit.icon}<span class="icon-badge"><IconGlyph name={benefit.icon} /></span>{/if}
            <strong>{benefit.title}</strong>
            <p>{benefit.copy}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="section-shell">
      <p class="section-kicker">Prova e contexto</p>
      <h2 class="section-title">Por que testar esta oferta</h2>
      <div class="proof-grid">
        {#each page.sections.proof as item}
          <article class="proof">
            {#if item.icon}<span class="icon-badge"><IconGlyph name={item.icon} /></span>{/if}
            <strong>{item.title}</strong>
            <p>{item.copy}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="section-shell">
      <p class="section-kicker">Próximo passo</p>
      <h2 class="section-title">Da visita ao plano de ação</h2>
      <div class="process-grid">
        {#each page.sections.process as item, index}
          <article class="process-item">
            {#if item.icon}
              <span class="icon-badge"><IconGlyph name={item.icon} /></span>
            {:else}
              <span class="process-number">{index + 1}</span>
            {/if}
            <strong>{item.title}</strong>
            <p>{item.copy}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="section-shell">
      <p class="section-kicker">Objeções comuns</p>
      <h2 class="section-title">Respostas rápidas antes da demonstração</h2>
      <div class="objection-grid">
        {#each page.sections.objections as item}
          <article class="objection">
            {#if item.icon}<span class="icon-badge"><IconGlyph name={item.icon} /></span>{/if}
            <strong>{item.title}</strong>
            <p>{item.copy}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="section-shell" id="lead-form">
      <p class="section-kicker">Conversão</p>
      <h2 class="section-title">{page.conversion.formTitle}</h2>
      <p class="section-copy">{page.conversion.formCopy}</p>

      <form class="form" on:submit={submitLead}>
        <label>
          Nome
          <input name="name" autocomplete="name" required />
        </label>
        <label>
          Escola
          <input name="school" autocomplete="organization" required />
        </label>
        <label>
          WhatsApp
          <input name="phone" autocomplete="tel" inputmode="tel" required />
        </label>
        <label>
          Interesse principal
          <select name="interest" required>
            <option value={page.productName}>{page.productName}</option>
            <option value="F10 completo">F10 completo</option>
            <option value="Multiunidades">Multiunidades</option>
          </select>
        </label>
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar interesse'}</button>
        <p class="form-note">{formStatus || page.conversion.microcopy}</p>
      </form>

      <p class="section-copy">
        <a class="primary-link" href={page.conversion.primaryHref} on:click={trackPrimaryCta}>
          {page.conversion.primaryLabel}
        </a>
      </p>
    </section>
  </div>
{/if}
