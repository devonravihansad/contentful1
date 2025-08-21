<script lang="ts">
  let count: number = 0;

  function increment(): void {
    count += 1;
  }
</script>

<h1>{count}</h1>
<button on:click={increment}>+1</button>
