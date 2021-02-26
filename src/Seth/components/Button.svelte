<script lang="ts">

    export let filled: boolean = false;
    export let color: string = "black";
    export let disabledColor: string = "#aaa";
    export let icon: string = "";
    export let style: string = "";
    export let disabled: boolean = false;
    export let flipped: boolean = false;
    export let width: string = "";
    export let height: string = "";
    export let href: string = null;

    $: isSlotFilled = $$slots["default"];
</script>

<!-- 
    @component
    **Button Component:**

    ```tsx
        <Button
            color="color-name|hex"
            disabledColor="color-name|hex"
            icon="material-icon-name"
            filled={true|false}
            disabled={true|false}
            style="name: value;"
        >
            Optional Button Text
        </Button>
    ```

    **Options:**
    - All options have defaults, so all are optional.
        - *color* (string: "black"): can be any hex code or color name.
        - *icon* (string): the name of a material icon
        - *filled* (boolean: false) whether the button should be the filled variant.
        - *disabled* (boolean: false) disables the button
        - *style* (string): styling applied to main button element.

    - Button text can be put between the button tags.
        - This is optional. To create an icon-only button, self close the button.

-->

{#if href !== null}
    <a href={href}>
        <button class:filled class:flipped style="--buttonColor:{color};--disabledColor:{disabledColor};width:{width};height:{height};{style}" disabled={disabled} class:disabled on:click>
            {#if icon != ""}
            <span class="material-icons button-icon" class:flipped class:icon-only={!isSlotFilled}>
                {icon}
            </span>
            {/if}
            {#if isSlotFilled}
            <div class:icon={icon != ""} class:flipped>
                <slot></slot>
            </div>
            {/if}
        </button>
    </a>
{:else}
    <button class:filled class:flipped style="--buttonColor:{color};--disabledColor:{disabledColor};width:{width};height:{height};{style}" disabled={disabled} class:disabled on:click>
        {#if icon != ""}
        <span class="material-icons button-icon" class:flipped class:icon-only={!isSlotFilled}>
            {icon}
        </span>
        {/if}
        {#if isSlotFilled}
        <div class:icon={icon != ""} class:flipped>
            <slot></slot>
        </div>
        {/if}
    </button>
{/if}

<style>
    button.flipped {
        flex-direction: row-reverse;
    }

    a {
        text-decoration: none;
    }

    button {
        padding: 0px;
        margin: 5px;
        color: var(--buttonColor);
        cursor: pointer;
        border: 2px solid var(--buttonColor);
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        text-transform: lowercase;
        box-shadow: 2px 2px #ccc;
        transition: ease all 0.1s;
    }

    div {
        margin: 5px 15px 5px 15px;
    }

    button:hover {
        background-color: var(--buttonColor);
        color: white;
    }

    button:active {
        box-shadow: 0px 0px #ccc;
        transform: translate(2px, 2px);
    }

    button.filled {
        background-color: var(--buttonColor);
        color: white;
    }

    button.disabled {
        color: var(--disabledColor);
    }

    button.filled.disabled {
        color: white;
        background-color: var(--disabledColor);
    }

    .icon {
        margin: 5px 15px 5px 10px !important;
    }

    .icon.flipped {
        margin: 5px 10px 5px 15px !important;
    }

    .button-icon {
        padding-left: 10px;
        margin: 0px;
        font-size: 1.2em;
    }

    .button-icon.flipped {
        padding-left: 0px;
        padding-right: 10px;
    }

    .icon-only {
        padding: 10px !important;
        font-size: 1.5em;
    }

    .disabled:active {
        transform: none;
        box-shadow: 2px 2px #ccc;
    }

    .disabled:hover {
        background: initial;
    }

    .disabled.filled:hover {
        background-color: var(--disabledColor);
        color: white;
    }

</style>
