<script lang="ts">
  import type { LandingPage } from '$lib/data/landingPages';
  import { trackConversionEvent } from '$lib/services/tracking';

  export let page: LandingPage;

  let formStatus = '';

  const submitLead = (event: SubmitEvent) => {
    event.preventDefault();
    trackConversionEvent('lead_form_submit', page);
    formStatus = 'Dados registrados localmente para rastreamento. Configure PUBLIC_LEAD_ENDPOINT para enviar ao CRM.';
  };

  const trackPrimaryCta = () => trackConversionEvent('primary_cta_click', page);
</script>

<div class="sections" style={`--accent: ${page.theme.accent};`}>
  <section class="section-shell">
    <p class="section-kicker">Dor central</p>
    <h2 class="section-title">{page.sections.pain}</h2>
    <p class="section-copy">{page.sections.promise}</p>

    <div class="card-grid">
      {#each page.sections.benefits as benefit}
        <article class="card">
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
          <span class="process-number">{index + 1}</span>
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
      <button type="submit">Enviar interesse</button>
      <p class="form-note">{formStatus || page.conversion.microcopy}</p>
    </form>

    <p class="section-copy">
      <a class="primary-link" href={page.conversion.primaryHref} on:click={trackPrimaryCta}>
        {page.conversion.primaryLabel}
      </a>
    </p>
  </section>
</div>
