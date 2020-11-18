<script>

</script>

<main>
    <div class="card-header">
        <slot name="header"></slot>
    </div>
    <div class="card-body">
        <slot name="card-action"></slot>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
    }

    div.card-header {
        width: 100%;
        border-bottom: 1px solid grey;
    }

</style>

