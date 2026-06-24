<script lang="ts">
  import { landingPages } from '$lib/data/landingPages';

  const pages = Object.values(landingPages);
</script>

<svelte:head>
  <title>F10 Landing Pages</title>
</svelte:head>

<main class="index-page">
  <h1>Landing pages F10</h1>
  <p>Páginas estáticas para campanhas, variações e testes A/B.</p>

  <nav class="index-links" aria-label="Landing pages disponíveis">
    {#each pages as page}
      <a href={`/${page.slug}`}>{page.slug} — {page.productName} / {page.variant}</a>
    {/each}
  </nav>
</main>
