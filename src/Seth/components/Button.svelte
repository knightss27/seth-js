<script lang="ts">
    export let filled: boolean = false;
    export let color: string = "black";
    export let icon: string = "";
    export let style: string = "";
    export let disabled: boolean = false;

    $: isSlotFilled = $$slots["default"];
</script>

<button class:filled style="--buttonColor:{color};{style}" disabled={disabled} class:disabled on:click>
    {#if icon != ""}
    <span class="material-icons button-icon" class:icon-only={!isSlotFilled}>
        {icon}
    </span>
    {/if}
    {#if isSlotFilled}
    <div class:icon={icon != ""}>
        <slot></slot>
    </div>
    {/if}
</button>

<style>
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

    .icon {
        margin: 5px 15px 5px 10px !important;
    }

    .button-icon {
        padding-left: 10px;
        margin: 0px;
        font-size: 1.2em;
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
        color: initial;
    }

    .disabled.filled:hover {
        background-color: var(--buttonColor);
        color: white;
    }

</style>
