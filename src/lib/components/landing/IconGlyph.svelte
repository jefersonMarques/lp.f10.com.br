<script lang="ts">
  export let name:
    | 'target'
    | 'message'
    | 'funnel'
    | 'task'
    | 'chart'
    | 'userPlus'
    | 'zap'
    | 'school' = 'target';
</script>

{#if name === 'target'}
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 21a9 9 0 1 0-9-9" />
    <path d="M12 17a5 5 0 1 0-5-5" />
    <path d="M12 13a1 1 0 1 0-1-1" />
    <path d="M20 4l-6.4 6.4" />
    <path d="M20 4h-4" />
    <path d="M20 4v4" />
  </svg>
{:else if name === 'message'}
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.5 6.5A3.5 3.5 0 0 1 8 3h8a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 16 15h-5l-4.8 4.2V15A3.5 3.5 0 0 1 4.5 11.5v-5Z" />
    <path d="M8.5 8h7" />
    <path d="M8.5 11h4.5" />
  </svg>
{:else if name === 'funnel'}
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 5h16l-6.2 7.2v4.6L10.2 19v-6.8L4 5Z" />
    <path d="M8 9h8" />
  </svg>
{:else if name === 'task'}
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 6h11" />
    <path d="M8 12h11" />
    <path d="M8 18h11" />
    <path d="m3.5 6 1 1 2-2" />
    <path d="m3.5 12 1 1 2-2" />
    <path d="m3.5 18 1 1 2-2" />
  </svg>
{:else if name === 'chart'}
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="m7 15 3.4-3.4 3 2.4L19 8" />
    <path d="M16 8h3v3" />
  </svg>
{:else if name === 'userPlus'}
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M15 19a6 6 0 0 0-12 0" />
    <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M19 8v6" />
    <path d="M16 11h6" />
  </svg>
{:else if name === 'zap'}
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M13 2 4 14h7l-1 8 10-13h-7l0-7Z" />
  </svg>
{:else}
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 10.5 12 5l8 5.5" />
    <path d="M6 10v9h12v-9" />
    <path d="M10 19v-5h4v5" />
  </svg>
{/if}
