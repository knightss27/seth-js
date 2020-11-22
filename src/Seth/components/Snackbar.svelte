<script lang="ts">
    export let open: boolean = false;
    export let status: string = "200";
    export let message: string = "";
    export let color: string = "green";
    export let handleClose: () => any = null;
    export let timeout: number = 4000;
    export let grouped: boolean = false;
    export let style: string = "";

    import {fly} from 'svelte/transition'
    import { sineInOut } from 'svelte/easing'
    import { onMount } from 'svelte'

    onMount(() => {
        if (grouped) {
            open = true;
            handleClose = () => {open = false;}
        }

        if (timeout !== null) {
            let autoClose = setTimeout(handleClose, timeout);
            return () => {clearTimeout(autoClose);}
        }
        
    })

    // example usage:
    // <Snackbar 
    //      color="green" 
    //      status="200" 
    //      message="Successfully added snackbar." 
    //      handleClose={() => {open = false}}      <---- handleClose must always evaluate the var to false.
    // />

</script>

{#if open}
    <main 
    transition:fly="{{delay: 50, duration: 400, y:100, easing: sineInOut }}" style="--mainColor:{color};"
    class:grouped={grouped} class:ungrouped={!grouped}
    >
    <div class="wrapper" style={style}>
        <div class="status">{status}</div>
        <div class="message">{message.toLowerCase()}</div>
        <span class="material-icons" on:click={handleClose} style="--mainColor:{color};">
            close
        </span>
    </div>
</main>

{/if}

<style>
    main {
        background: white;
        border: 2px solid var(--mainColor);
        margin: 1px 0px;
    }
    main.ungrouped div.wrapper {
        position: fixed;
        bottom: 10px;
        left: 50%;
        transform: translatex(-50%);
    }
    main div.wrapper {
        color: white;
        background: var(--mainColor);
        opacity: 0.8;
        display: flex;
        align-items: center;
        overflow: hidden;
        justify-content: space-between;
    }
    div.message, div.status {
        display: flex;
        align-items: center;
        margin: 4px;
        padding: 0px;
        padding-bottom: 2px;
    }
    div.status {
        background: rgba(0, 0, 0, 0.4) !important;
        padding: 1px 4px 2px 4px;
        border-radius: 2px;
        margin-left: 7px;
    }
    span {
        font-size: 16px;
        margin: 6px 7px 6px 5px;
        background: rgba(255, 255, 255, 0.3);
        color: white;
        /* border-radius: 25px; */
        /* border: 2px solid var(--mainColor); */
        padding: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    span:hover {
        background: rgba(255, 255, 255, 0.4);
        cursor: pointer;
    }
</style>

