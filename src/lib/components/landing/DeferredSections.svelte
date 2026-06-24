<script lang="ts">
  import { onMount } from 'svelte';
  import type { LandingPage } from '$lib/data/landingPages';

  export let page: LandingPage;

  type LandingSectionsComponent = typeof import('./LandingSections.svelte').default;

  let anchor: HTMLDivElement;
  let Sections: LandingSectionsComponent | null = null;
  let isLoading = false;

  const loadSections = async () => {
    if (Sections || isLoading) {
      return;
    }

    isLoading = true;
    const module = await import('./LandingSections.svelte');
    Sections = module.default;
  };

  onMount(() => {
    if (!('IntersectionObserver' in window)) {
      void loadSections();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          void loadSections();
        }
      },
      { rootMargin: '360px 0px' }
    );

    observer.observe(anchor);

    return () => observer.disconnect();
  });
</script>

<div bind:this={anchor} class="deferred-anchor"></div>

{#if Sections}
  <svelte:component this={Sections} page={page} />
{:else}
  <div class="deferred-skeleton">Role para carregar os detalhes da demonstração.</div>
{/if}
