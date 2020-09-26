<script lang="ts">
    export let filled: boolean = false;
    export let color: string = "black";
</script>

<button class:filled style="--buttonColor:{color}">
    <div>
        <slot></slot>
    </div>
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
</style>
