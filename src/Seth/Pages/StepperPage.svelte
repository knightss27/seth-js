<script lang="ts">
    import Card from '../components/Card.svelte';
    import Button from '../components/Button.svelte';
    import ButtonGroup from '../components/ButtonGroup.svelte';
    import Stepper from '../components/Stepper.svelte';
    import { fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { onMount } from 'svelte';
    export let button: string;
    let onscreen = false;

    onMount(() => {
        onscreen = true;
    })

</script>

<div class="stepper-wrapper" out:fly="{{delay: 0, x: (button == 'next') && (onscreen) ? -500 : 500, duration: 300, easing: quintOut }}" in:fly="{{delay: 200, x: (button == 'back') && (!onscreen) ? -500 : 500, duration: 300, easing: quintOut }}">
    <div class="wrapper">
        <div class="header">Steppers</div>
        <Stepper style={"margin: 1rem 0px 0.5rem"} color="black" steps={4} currentStep={2} on:forwards={(e) => {console.log('forwards!', e.detail)}}></Stepper>
        <Stepper style={"margin: 0.5rem 0px"} capped={false} color="black" steps={4} currentStep={1}></Stepper>
        <Stepper style={"margin: 0.5rem 0px"} forwards="your text" backwards="my text" capped={false} color="green" steps={4} currentStep={3}></Stepper>
        <Stepper style={"margin: 0.5rem 0px"} color="green" steps={6} currentStep={3}></Stepper>
    </div>
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
        height: auto;
        color: black;
    }

    div.header {
        display: flex;
        width: auto;
        border: 2px solid black;
        align-items: center;
        font-weight: bold;
        font-size: 1.5rem;
        padding-left: 10px;
        padding-bottom: 3px;
    }

    div.wrapper {
        display: flex;
        flex-direction: column;
        width: calc(100% - 14px);
        max-width: 500px;
    }

</style>