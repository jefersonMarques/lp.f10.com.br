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
