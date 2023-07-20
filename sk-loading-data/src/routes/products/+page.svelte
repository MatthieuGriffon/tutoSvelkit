<script>
    export let data;
    const username = data.username;
    const products = data.products;
    const Component = data.Component;
</script>

<h1>{data.title} for {username}</h1>
{#each products as product}
    <div>
      <Component {product} />
    </div>
{/each}
