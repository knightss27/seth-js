<script lang="ts">
    export let margin: number = 5;
    export let elevation: number = 2;
    export let width: string = '400px';
    export let height: string = '400px';
    export let style: string = '';

    let bodyHeight = null;

</script>

<main on:click style="margin:{margin}px; --elevation:{elevation}px; --width:{width}; --height:{height}; --display:{height != '' ? 'block' : 'flex'};{style}">
    {#if $$slots['header']}
        <div class="card-header">
            <slot name="header"></slot>
        </div>
    {/if}

    {#if $$slots['img']}
        <div class="card-img" style={bodyHeight !== null ? "max-height: calc(" + height + " - " + bodyHeight + "px);" : null}>
            <slot name="img"></slot>
        </div>
    {/if}

    {#if $$slots['body']}
        <div class="card-body" bind:clientHeight={bodyHeight} style={$$slots['img'] ? 'border-top: 2px solid black;' : null}>
            <slot name="body"></slot>
        </div>
    {/if}

    {#if !($$slots['header'] || $$slots['body'])}
        <slot></slot>
    {/if}
</main>

<style>
    main {
        color: black;
        display: inline-flex;
        flex-direction: column;
        border: 2px solid black;
        margin: 5px;
        box-shadow: var(--elevation) var(--elevation) #ccc;
        width: var(--width);
        height: var(--height);
    }

    div.card-header {
        display: flex;
        border-bottom: 2px solid black;
        align-items: center;
        font-weight: bold;
        font-size: 1.5rem;
        padding-left: 10px;
        padding-bottom: 3px;
    }

    div.card-body {
        padding: 5px 0px 10px 10px;
        width: calc(100% - 10px);
        display: flex;
    }

    div.card-img {
        max-width: var(--width);
        overflow: hidden;
        margin: 0px;
        padding: 0px;
        display: var(--display);
    }

</style>

