<script lang="ts">
  import type { LandingPage } from '$lib/data/landingPages';
  import { trackConversionEvent } from '$lib/services/tracking';

  export let page: LandingPage;
  export let isOpen = false;
  export let onClose: () => void;

  const trackPrimaryCta = () => trackConversionEvent('primary_cta_click', page);
</script>

{#if isOpen}
  <div class="dialog-backdrop" role="presentation" on:click={onClose}>
    <section
      class="dialog-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Vídeo de demonstração"
      on:click|stopPropagation
    >
      <button class="dialog-close" type="button" aria-label="Fechar vídeo" on:click={onClose}>×</button>

      {#if page.hero.videoUrl}
        <div class="video-box">
          <iframe
            title="Vídeo de demonstração F10"
            src={page.hero.videoUrl}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      {:else}
        <div class="video-empty">
          <h2>Vídeo ainda não configurado nesta variação.</h2>
          <p>Preencha `videoUrl` em `src/lib/data/landingPages.ts` para carregar o iframe somente após este clique.</p>
          <a href={page.conversion.primaryHref} on:click={trackPrimaryCta}>Agendar demonstração pelo WhatsApp</a>
        </div>
      {/if}
    </section>
  </div>
{/if}
