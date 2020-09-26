<script>
    export let sticky = false;

</script>

<style>
    main {
        width: 100%;
        background: #333;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    div {
        margin: 15px;
        display: flex;
        max-height: 100%;
        align-items: center;
    }
    .sticky {
        position: fixed;
        top: 0;
        left: 0;
    }
</style>

<main class:sticky>
    <div>
        <slot name="left-side"></slot>
    </div>
    <div>
        <slot name="right-side"></slot>
    </div>
</main>
