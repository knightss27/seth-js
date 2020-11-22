<script>
    import {fly} from 'svelte/transition'
    import {quintOut} from 'svelte/easing'
</script>

<main out:fly="{{delay: 0, x: -500, duration: 200, easing: quintOut }}" in:fly="{{delay: 200, x: -500, duration: 300, easing: quintOut }}">
    <h1>seth.js</h1>
    <h3>reusable svelte components. designed and built by me.</h3>
</main>

<style>
    main {
        color: black;
        font-size: xx-large;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
        margin-bottom: 50px;
        height: 354px;
        grid-column: 1/2;
		grid-row: 1/2;
    }

    h1, h3 {
        text-align: center;
        margin: 10px;
    }

    h3 {
        width: min(600px, 90%);
    }

</style>
