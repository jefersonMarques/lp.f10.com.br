<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import DeferredSections from '$lib/components/landing/DeferredSections.svelte';
  import HeroMedia from '$lib/components/landing/HeroMedia.svelte';
  import { scheduleTracking } from '$lib/services/tracking';

  export let data: PageData;

  onMount(() => scheduleTracking(data.page));
</script>

<svelte:head>
  <title>{data.page.meta.title}</title>
  <meta name="description" content={data.page.meta.description} />
  <link rel="preload" as="image" href={data.page.hero.image} fetchpriority="high" />
</svelte:head>

<main>
  <HeroMedia page={data.page} />
  <DeferredSections page={data.page} />
</main>
