<script lang="ts">
    export let width:string = "100%"
    export let clientWidth:number;
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

    **Options TO BE IMPLEMENTED:**
    - All options have defaults, so all are optional.
        - *color* (string: "black"): can be any hex code or color name.
        - *icon* (string): the name of a material icon
        - *filled* (boolean: false) whether the button should be the filled variant.
        - *disabled* (boolean: false) disables the button
        - *style* (string): styling applied to main button element.

    - Button text can be put between the button tags.
        - This is optional. To create an icon-only button, self close the button.

-->

<main style="--groupWidth:{width}" bind:clientWidth={clientWidth}>
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
