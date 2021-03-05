<script lang="ts">
    /** width of the button group */
    export let width: string = "100%";
</script>

<!-- 
    @component
    **Button Component:**

    ```tsx
        <ButtonGroup width="px|%|etc." >
            <div>Button 1</div>
            <div>Button 2</div>
            <div>Button 3</div>
        </ButtonGroup>
    ```
    TODO: Finish this documentation

-->

<main style="--groupWidth:{width}">
    <wrapper style="width: 100%" class="sethjs-ButtonGroup">
        <slot></slot>
    </wrapper>
</main>

<style>
    main {
        display: inline-block;
        margin: 5px;
        width: var(--groupWidth);
    }

    .sethjs-ButtonGroup :global(div) {
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

    .sethjs-ButtonGroup :global(div:hover) {
        background: black;
        color: white;
        flex-grow: 2;
    }

    .sethjs-ButtonGroup :global(div:active) {
        transform: translate(0px, 2px);
        box-shadow: none;
    }


    .sethjs-ButtonGroup :global(div + div) {
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
