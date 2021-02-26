<script lang="ts">
    import Card from '../components/Card.svelte';
    import Button from '../components/Button.svelte';
    import ButtonGroup from '../components/ButtonGroup.svelte';
    import { fly } from 'svelte/transition'
    import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    export let button: string;
    let onscreen = false;

    onMount(() => {
        onscreen = true;
    })

</script>

<div class="stepper-wrapper" out:fly="{{delay: 0, x: (button == 'next') && (onscreen) ? -500 : 500, duration: 300, easing: quintOut }}" in:fly="{{delay: 200, x: (button == 'back') && (!onscreen) ? -500 : 500, duration: 300, easing: quintOut }}">
    <Card width="min(500px, calc(100% - 14px))" height="auto" elevation={0}>
        <div slot="header">Steppers</div>
    </Card>     
</div>

<style>
    div.stepper-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
        grid-column: 1/2;
		grid-row: 1/2;
    }
</style>