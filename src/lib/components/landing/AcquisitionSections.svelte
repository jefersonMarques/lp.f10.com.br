<script lang="ts">
  import { env } from '$env/dynamic/public';
  import type { LandingPage } from '$lib/data/landingPages';
  import { trackConversionEvent } from '$lib/services/tracking';
  import ArtPlaceholder from './ArtPlaceholder.svelte';

  export let page: LandingPage;

  let formStatus = '';
  let isSubmitting = false;

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

<div class="acquisition-page" style={`--accent: ${page.theme.accent};`}>
  <section class="acquisition-section acquisition-section--intro">
    <div class="acquisition-copy">
      <p class="acquisition-kicker">Captação de alunos</p>
      <h2>Sua base de contatos pode virar matrícula.</h2>
      <p>
        Importe leads de planilhas ou de outros sistemas, organize o atendimento pelo WhatsApp e acompanhe cada próximo passo até a matrícula.
      </p>
    </div>

    <ArtPlaceholder
      aspectRatio="16 / 10"
      minHeight="260px"
      description="Arte mostrando planilha e outros sistemas entrando no F10"
    />
  </section>

  <section class="acquisition-section acquisition-section--split">
    <ArtPlaceholder
      aspectRatio="4 / 3"
      minHeight="280px"
      description="Arte de importação de planilhas, CSV e sistema anterior"
    />

    <div class="acquisition-copy">
      <p class="acquisition-kicker">Importação</p>
      <h2>Comece pela base que a escola já tem.</h2>
      <p>
        Leads antigos, planilhas de campanhas, contatos de WhatsApp e dados vindos de outro sistema entram no F10 para continuar o atendimento sem começar do zero.
      </p>
      <ul class="acquisition-list">
        <li>Planilhas de leads antigos.</li>
        <li>Bases exportadas de outros sistemas.</li>
        <li>Contatos separados por origem, interesse e responsável.</li>
      </ul>
    </div>
  </section>

  <section class="acquisition-section acquisition-section--split acquisition-section--reverse">
    <ArtPlaceholder
      aspectRatio="4 / 3"
      minHeight="280px"
      description="Arte de atendimento por WhatsApp com histórico do lead"
    />

    <div class="acquisition-copy">
      <p class="acquisition-kicker">Atendimento</p>
      <h2>WhatsApp com contexto, não conversa solta.</h2>
      <p>
        O time visualiza origem, etapa, histórico e próxima ação antes de responder. O lead deixa de depender da memória do vendedor.
      </p>
    </div>
  </section>

  <section class="acquisition-section acquisition-section--media-first">
    <div class="acquisition-copy">
      <p class="acquisition-kicker">Follow-up</p>
      <h2>O sistema lembra quem precisa de retorno.</h2>
      <p>
        Tarefas e etapas ajudam a equipe a saber quem chamou, quem respondeu, quem precisa de proposta e quem está perto da matrícula.
      </p>
    </div>

    <ArtPlaceholder
      aspectRatio="16 / 9"
      minHeight="260px"
      description="Arte do funil de captação com tarefas e próximos retornos"
    />
  </section>

  <section class="acquisition-section acquisition-section--closing">
    <div class="acquisition-copy">
      <p class="acquisition-kicker">Conversão</p>
      <h2>Transforme interesse em processo comercial.</h2>
      <p>
        A página de captação deve vender uma rotina simples: importar, atender, retornar e matricular.
      </p>
    </div>

    <form class="form acquisition-form" on:submit={submitLead}>
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
          <option value="Importação de leads">Importação de leads</option>
          <option value="WhatsApp e funil">WhatsApp e funil</option>
          <option value="F10 completo">F10 completo</option>
        </select>
      </label>
      <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Quero recuperar meus leads'}</button>
      <p class="form-note">{formStatus || page.conversion.microcopy}</p>
    </form>

    <p class="acquisition-link-row">
      <a class="primary-link" href={page.conversion.primaryHref} on:click={trackPrimaryCta}>
        Conversar pelo WhatsApp
      </a>
    </p>
  </section>
</div>
