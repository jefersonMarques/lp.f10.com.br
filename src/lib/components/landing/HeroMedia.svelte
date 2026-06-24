<script lang="ts">
  import type { LandingPage } from '$lib/data/landingPages';
  import { trackConversionEvent } from '$lib/services/tracking';
  import VideoDialog from './VideoDialog.svelte';

  export let page: LandingPage;

  let isVideoOpen = false;

  const openVideo = () => {
    isVideoOpen = true;
    trackConversionEvent('video_open', page);
  };
</script>

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

<VideoDialog page={page} isOpen={isVideoOpen} onClose={() => (isVideoOpen = false)} />
