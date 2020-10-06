<script lang="ts">
    export let width:string = "100%"
</script>

<main>
    <wrapper style="--groupWidth:{width}" class="sethjs-ButtonGroup">
        <slot></slot>
    </wrapper>
</main>

<style>
    main {
        display: inline-block;
        margin: 5px;
    }

    :global(.sethjs-ButtonGroup div) {
        flex: auto;
        color: black;
        background: transparent;
        flex-grow: 1;
        border: 2px solid black;
        cursor: pointer;
        transition: ease all 0.1s;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        padding: 5px 0px 5px 0px;
        box-shadow: 0px 2px #ccc; 
        text-transform: lowercase;
    }

    :global(.sethjs-ButtonGroup div:hover) {
        background: black;
        color: white;
        flex-grow: 2;
    }

    :global(.sethjs-ButtonGroup div:active) {
        transform: translate(0px, 2px);
        box-shadow: none;
    }


    :global(.sethjs-ButtonGroup div + div) {
        border-left: 2px solid black;
        margin-left: -2px;
    }

    wrapper:last-child {
        box-shadow: 2px 2px #ccc;
    }

    wrapper {
        display: flex;
        width: var(--groupWidth);
        align-items: center;
    }
</style>
