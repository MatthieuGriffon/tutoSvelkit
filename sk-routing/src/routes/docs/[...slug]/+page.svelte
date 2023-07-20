<script>
    import {page} from '$app/stores';
    console.log($page.params.slug);
    const slugArr = $page.params.slug.split('/');
    console.log(slugArr);
</script>
<h1>Docks home page</h1>

    {#if slugArr.length === 1}
        <h1>Vous voyez la docs pour les feature {slugArr[0]}</h1>
    {:else if slugArr.length === 2}
        <h1>Vous voyez la docs pour les feature {slugArr[0]} et le concept {slugArr[1]}</h1>
    {/if}