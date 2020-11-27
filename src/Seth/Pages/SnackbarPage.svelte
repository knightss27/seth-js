<script lang="ts">
    import Snackbar from '../components/Snackbar.svelte';
    import SnackbarGroup from '../components/SnackbarGroup.svelte'
    import { SnackBars } from '../../stores'
    import Button from '../components/Button.svelte'
    import Card from '../components/Card.svelte'
    import { addSnackbar } from '../utils'
    import { fly } from 'svelte/transition'
    import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    import TextInput from '../components/TextInput.svelte';
    export let button: string;
    let onscreen = false;

    onMount(() => {
        onscreen = true;
    })

    let status: number = null;
    let message: string = "";
    let color: string = "";

</script>

<div class="snackbar-wrapper" out:fly="{{delay: 0, x: (button == 'next') && (onscreen) ? -500 : 500, duration: 300, easing: quintOut }}" in:fly="{{delay: 200, x: (button == 'back') && (!onscreen) ? -500 : 500, duration: 300, easing: quintOut }}">
    <Card width="min(500px, calc(100% - 14px))" height="auto" elevation={0}>
        <div slot="header">Snackbars</div>
        <div slot="body" class="snackbar-card-body">
            <div class="design">
                <h3>Design</h3>
                <Snackbar open={true} style="position: relative; transform: none; left: 0; top: 0;" timeout={null} message="success snackbar" />
                <Snackbar open={true} color="red" status="500" style="position: relative; transform: none; left: 0; top: 0; justify-content: space-between;" timeout={null} message="error snackbar" />
            </div>
            <div class="buttons">
                <SnackbarGroup />
                <h3>Snackbar Group</h3>
                <Button color="green" on:click={() => {addSnackbar('200', 'success snackbar', 'green', 3000)}}>Add success</Button>
                <Button color="red" on:click={() => {addSnackbar('200', 'error snackbar', 'red', 3000)}}>Add error</Button>
            </div>
            <div class="customizable">
                <h3>Customization</h3>
                    <div style="display: flex">
                        <div style="display: flex; width: 45%; flex-direction: column; flex-grow: 1">
                            <TextInput bind:value={status} type="number" icon="bug_report" variant="compact" placeholder="status"/>
                            <TextInput bind:value={message} icon="insert_comment" variant="compact" placeholder="message" />
                        </div>
                        <div style="display: flex; width: 45%; flex-direction: column; flex-grow: 1">
                            <TextInput bind:value={color} icon="palette" variant="compact" placeholder="color" />
                            <Button height="35px" on:click={() => {addSnackbar(status, message, color, 3000)}}>Add snackbar</Button>
                        </div>
                    </div>
            </div>
        </div>
    </Card>
</div>

<style>
    h3 {
        margin: 0px;
        margin-bottom: 5px;
    }

    div.snackbar-card-body {
        display: flex;
        flex-wrap: wrap;
        width: calc(100% - 10px);
    }

    div.design {
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        padding: 4px 8px;
        flex-grow: 1;
        margin: 5px;
        width: 200px;
    }

    div.customizable {
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        height: 134px;
        padding: 4px 8px;
        flex-grow: 1;
        margin: 5px;
        width: 200px;
    }

    div.buttons {
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        padding: 4px 8px;
        flex-grow: 1;
        margin: 5px;
    }

    div.snackbar-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
        grid-column: 1/2;
		grid-row: 1/2;
    }
</style>

