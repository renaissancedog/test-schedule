<script>
  import '../app.css';
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Reagan Schedule</title>
  <script
    src="https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.slim.min.js"
  ></script>
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="{base}/favicon-16x16.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="{base}/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="48x48"
    href="{base}/favicon-48x48.png"
  />
</svelte:head>
<div class="min-h-full bg-sky-50 text-black">
  <slot></slot>
</div>
