<script lang="ts">
  // Layout-level script: shared data, stores, imports
  let appName = "My SvelteKit App";
</script>

<!-- Common header / navbar -->
<header>
  <h1>{appName}</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<!-- Slot where page content will be rendered -->
<main>
  <slot />
</main>

<!-- Footer -->
<footer>
  © 2025 {appName} | All rights reserved
</footer>
