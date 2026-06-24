<script lang="ts">
  export let label = 'ARTE AQUI';
  export let description = '';
  export let aspectRatio = '4 / 5';
  export let minHeight = '320px';
</script>

<div
  class="art-placeholder"
  style={`--art-aspect-ratio: ${aspectRatio}; --art-min-height: ${minHeight};`}
  role="img"
  aria-label={description || label}
>
  <span>{label}</span>
  {#if description}
    <small>{description}</small>
  {/if}
</div>

<style>
  .art-placeholder {
    display: grid;
    place-items: center;
    align-content: center;
    gap: 10px;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    min-height: min(var(--art-min-height), 72svh);
    aspect-ratio: var(--art-aspect-ratio);
    padding: 28px;
    overflow: hidden;
    border: 2px dashed #cfd4dc;
    border-radius: 28px;
    background:
      linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(246, 247, 249, 0.94)),
      repeating-linear-gradient(45deg, #f2f4f7 0 12px, #ffffff 12px 24px);
    color: #8a93a3;
    text-align: center;
  }

  .art-placeholder span {
    max-width: 100%;
    color: #667085;
    font-size: clamp(1rem, 4vw, 1.45rem);
    font-weight: 700;
    letter-spacing: 0.16em;
    overflow-wrap: anywhere;
  }

  .art-placeholder small {
    max-width: min(100%, 320px);
    color: #98a2b3;
    font-size: 0.86rem;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }
</style>
