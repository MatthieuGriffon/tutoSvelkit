<script>
    // Déclaration des variables exportées
    export let productId = 100;
    export let inputvalue = 0;
    
    // Fonction appelée lors du clic sur le bouton "Valider"
    function handleClick() {
        // Récupère la valeur de l'input avec l'ID "inputvalue" et la stocke dans la variable inputvalue
        inputvalue = document.getElementById('inputvalue').value;
    }
</script>

<a href="/">Home</a>
<h1>Liste de produit</h1>
<label for="input">Entrez le nombre de votre produit</label>
<input type="number" name="input" id="inputvalue" value="">

<button class="submit" on:click={handleClick}>Valider</button>

<h2><a href="/products/1">Produit 1</a></h2>
<h2><a href="/products/2">Produit 2</a></h2>
<h2><a href="/products/3">Produit 3</a></h2>
<h2><a href={`/products/${productId}`}>Product {productId}</a></h2>

{#if inputvalue > 0}
    <!-- Condition pour afficher le lien seulement si inputvalue est supérieur à 0 -->
    <h2><a href={`/products/${inputvalue}`}>Product {inputvalue}</a></h2>
{/if}
