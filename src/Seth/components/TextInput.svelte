<script lang="ts">
    export let icon: string = null;
    export let elevation: number = 0;
    export let variant: string = "normal";
    export let value: any;

    let compact: boolean = variant == "compact";

</script>

{#if icon !== null}
<div style="--elevation:{elevation}px" class:compact on:change>
    <span class="material-icons">{icon}</span>
    <input bind:value type="text" {...$$restProps} class:icon={icon !== null}/>
</div>
{:else}
    <input bind:value class:compact type="text" {...$$restProps} style="--elevation:{elevation}px" class:icon={icon !== null}/>
{/if}


<style>
    input {
        color: black;
        border: 2px solid black !important;
        padding: 8px 12px;
        margin: 5px;
        font-size: 1rem;
        display: flex;
        flex-grow: 1;
        width: 1px;
    }

    div input {
        padding: 4px 8px;
    }

    input::placeholder {
        color: black;
    }

    span {
        color: black;
        display: flex;
        align-items: center;
        padding: 0px 8px;
        border-right: 2px solid black;
    }

    div {
        border: 2px solid black;
        display: inline-flex;
        margin: 5px;
        box-shadow: var(--elevation) var(--elevation) lightgray;
    }

    input.icon {
        border: none !important;
        margin: none;
    }

    div.compact span {
        padding: 0px 4px;
    }

    div.compact input {
        padding: 1px 4px;
    }

    input.compact {
        padding: 4px 8px;
    }
</style>