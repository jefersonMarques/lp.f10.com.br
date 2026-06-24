<script lang="ts">
  import type { LandingPage } from '$lib/data/landingPages';
  import { trackConversionEvent } from '$lib/services/tracking';
  import ArtPlaceholder from './ArtPlaceholder.svelte';
  import VideoDialog from './VideoDialog.svelte';

  export let page: LandingPage;

  let isVideoOpen = false;

  const isAcquisitionPage = page.slug === 'captacao-a';

  const openVideo = () => {
    isVideoOpen = true;
    trackConversionEvent('video_open', page);
  };
</script>

{#if isAcquisitionPage}
  <section class="acquisition-hero" style={`--accent: ${page.theme.accent}; --bg: ${page.theme.background};`}>
    <div class="acquisition-hero__header">
      <img src="/media/logo-f10.svg" alt="F10" width="106" height="60" loading="eager" decoding="async" />
    </div>

    <div class="acquisition-hero__grid">
      <div class="acquisition-hero__copy">
        <p class="acquisition-kicker">Captação de alunos</p>
        <h1>Sua escola já tem leads. Agora precisa transformar esses contatos em matrículas.</h1>
        <p>
          Importe planilhas e bases de outros sistemas, atenda pelo WhatsApp e organize o follow-up até o fechamento.
        </p>
        <div class="acquisition-hero__actions">
          <button class="acquisition-primary-button" type="button" on:click={openVideo}>
            Ver como recuperar leads
          </button>
          <a class="acquisition-secondary-link" href="#lead-form">Quero importar minha base</a>
        </div>
      </div>

      <ArtPlaceholder
        aspectRatio="4 / 5"
        minHeight="420px"
        description="Arte principal mostrando planilha, WhatsApp, funil e matrícula"
      />
    </div>
  </section>
{:else}
  <section class="hero" style={`--accent: ${page.theme.accent}; --bg: ${page.theme.background};`}>
    <h1 class="sr-only">{page.hero.accessibleTitle}</h1>

    <div class="hero-frame">
      <img class="hero-logo" src="/media/logo-f10.svg" alt="F10" width="106" height="60" loading="eager" decoding="async" />

      <img
        class="hero-image"
        src={page.hero.image}
        alt={page.hero.alt}
        width="240"
        height="426"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />

      <button class="video-button" type="button" on:click={openVideo}>
        ▶ {page.conversion.primaryLabel}
      </button>
    </div>
  </section>
{/if}

<VideoDialog page={page} isOpen={isVideoOpen} onClose={() => (isVideoOpen = false)} />
