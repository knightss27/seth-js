<script lang="ts">
    export let icon: string = null;
    export let elevation: number = 1;

</script>

{#if icon !== null}
<div>
    <span class="material-icons">{icon}</span>
    <input type="text" {...$$restProps} placeholder="test" class:icon={icon !== null}/>
</div>
{:else}
    <input type="text" {...$$restProps} placeholder="test" class:icon={icon !== null}/>
{/if}


<style>
    input {
        color: black;
        border: 2px solid black !important;
        padding: 4px 8px;
        margin: 5px;
        font-size: 1rem;
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
    }

    input.icon {
        border: none !important;
        margin: none;
    }
</style>