<script>
  import { base } from '$app/paths';
  import House from '../icons/House.svelte';
  import Book from '../icons/Book.svelte';
  // import { populate } from '../../../static/scripts.js';
</script>

<div
  class="inset-right-0 fixed left-0 min-h-full space-y-4 bg-sky-600 px-4 text-lg text-white"
>
  <a class="flex flex-row items-center pt-4" href="{base}/">
    <House />
    <p class="align-items px-3">Home</p>
  </a>
  <a class="flex flex-row items-center pt-4" href="{base}/reference">
    <Book />
    <p class="align-items px-3">Reference</p>
  </a>
</div>
