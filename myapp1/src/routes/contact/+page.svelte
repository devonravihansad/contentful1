<script>
  export let form;
</script>

<h1>Contact Us</h1>

<form method="post">
  <label>
    Name:
    <input name="name" />
  </label>
  <br />
  <label>
    Message:
    <input name="message" />
  </label>
  <br />
  <button type="submit">Send</button>
</form>

{#if form?.success}
  <p>Thanks {form.name}, we got your message: "{form.message}"</p>
{/if}