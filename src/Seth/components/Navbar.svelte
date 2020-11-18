<script>
    export let style = '';
</script>

<main>
    <slot name="brand"></slot>
    <slot></slot>
</main>

<style>

    main {
        /* height: 42px; */
        width: calc(100% - 14px);
        margin: 5px;
        border: 2px solid black;
        background-color: var(--color);
        display: flex;
        align-items: center;
        color: black;
        flex-wrap: wrap;
    }

</style>

