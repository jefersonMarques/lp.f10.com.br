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

<style>
  .acquisition-hero {
    min-height: 100svh;
    padding: max(18px, env(safe-area-inset-top)) 18px max(28px, env(safe-area-inset-bottom));
    background: #ffffff;
    color: #111827;
  }

  .acquisition-hero__header {
    width: min(100%, 1120px);
    margin: 0 auto 34px;
  }

  .acquisition-hero__header img {
    display: block;
    width: 74px;
    height: auto;
  }

  .acquisition-hero__grid {
    display: grid;
    gap: 28px;
    align-items: center;
    width: min(100%, 1120px);
    margin: 0 auto;
  }

  .acquisition-hero__copy {
    display: grid;
    gap: 18px;
  }

  .acquisition-kicker {
    margin: 0;
    color: #ea6d0b;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .acquisition-hero h1 {
    max-width: 760px;
    margin: 0;
    color: #111827;
    font-size: clamp(2.55rem, 10vw, 5.6rem);
    font-weight: 560;
    line-height: 0.94;
    letter-spacing: -0.075em;
  }

  .acquisition-hero p {
    max-width: 620px;
    margin: 0;
    color: #5b6472;
    font-size: clamp(1.04rem, 3vw, 1.25rem);
    line-height: 1.5;
  }

  .acquisition-hero__actions {
    display: grid;
    gap: 12px;
    margin-top: 8px;
  }

  .acquisition-primary-button,
  .acquisition-secondary-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    padding: 0 22px;
    border-radius: 999px;
    font-weight: 700;
    text-decoration: none;
  }

  .acquisition-primary-button {
    border: 0;
    background: #111827;
    color: #ffffff;
    cursor: pointer;
  }

  .acquisition-secondary-link {
    border: 1px solid #d0d5dd;
    background: #ffffff;
    color: #111827;
  }

  @media (min-width: 860px) {
    .acquisition-hero {
      display: grid;
      align-content: center;
      padding: 32px;
    }

    .acquisition-hero__grid {
      grid-template-columns: minmax(0, 1fr) minmax(360px, 0.72fr);
      gap: 56px;
    }

    .acquisition-hero__actions {
      grid-template-columns: max-content max-content;
      align-items: center;
    }
  }
</style>
