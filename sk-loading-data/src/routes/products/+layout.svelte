<script>
    export let data;
    const username = data.username;
    const title = data.title;
    const featuredProducts = data.featuredProducts;
</script>

<slot />    

<h2> {title} for {username} </h2>

{#each featuredProducts as product}
    <div class="product-item">
        <h3> {product.title} </h3>
        <p> {product.description} </p>
    </div>
{/each}

<style>
    .product-item {
        display: inline-block;
        width: 200px;
        margin: 10px;
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>