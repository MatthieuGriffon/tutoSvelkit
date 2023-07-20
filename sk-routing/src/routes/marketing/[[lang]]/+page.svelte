<script>
    import {page} from '$app/stores';
    const greetings = {
        en : 'Hello',
        es : 'Hola',
        fr : 'Bonjour',
    }

    const { lang = 'fr'} = $page.params;
    const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>
