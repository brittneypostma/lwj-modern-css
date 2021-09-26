<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap" rel="stylesheet">
</svelte:head>

<Header />
<main class="container">
  <slot />
</main>
<Footer />

<style global lang="scss">
  @import "src/lib/styles/style";
</style>

<script>
  import Header from '$layout/header.svelte'
  import Footer from '$layout/footer.svelte'
</script>