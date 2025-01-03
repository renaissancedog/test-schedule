<script>
  import { base } from '$app/paths';
  import House from '../icons/House.svelte';
  import Book from '../icons/Book.svelte';
</script>

<div
  class="fixed bottom-0 left-0 flex w-screen flex-row space-y-4 bg-sky-600 px-4 text-lg text-white lg:w-auto lg:inset-right-0 lg:min-h-full lg:flex-col"
>
  <a class="flex-row items-center pt-4 md:flex" href="{base}/">
    <House />
    <p class="align-items invisible px-3 md:visible">Home</p>
  </a>
  <a class="flex-row items-center pt-4 md:flex" href="{base}/courses">
    <Book />
    <p class="align-items invisible px-3 md:visible">Courses</p>
  </a>
</div>
