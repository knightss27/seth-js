<script lang="ts">
    import Button from './Button.svelte'
    import { tweened } from 'svelte/motion'
    import { cubicOut } from 'svelte/easing';
    import { createEventDispatcher } from 'svelte';

    /** button and outline color */
    export let color: string = "black";
    /** component width */
    export let width: string = "100%";
    /** should show checkmarks? */
    export let simple: boolean = true;
    /** text of the backwards button */
    export let forwards: string = "next";
    /** text of the forwards button */
    export let backwards: string = "previous";
    /** number of steps, starts at the 0th step */
    export let steps: number = 4;
    /** callback function for when the forwards button is clicked.
     *  **PLEASE NOTE**: This will override the default step management function.
     *  If you do not want a controlled stepper, use `on:forwards`.
     */
    export let nextStep: ({e: Event, percent: number}) => void = null;
    /** callback function for when the forwards button is clicked.
     *  **PLEASE NOTE**: This will override the default step management function.
     *  If you do not want a controlled stepper, use `on:backwards`.
     */
    export let prevStep: ({e: Event, percent: number}) => void = null;
    /** allows for controlling/binding the current step, should be less than or equal to the total steps */
    export let currentStep: number = 0;
    /** returns true when currentStep >= steps */
    export let finished: boolean = false;
    /** returns true when currentStep > 0 */
    export let started: boolean = false;
    /** whether or not to split the bar into fragments, or stay as a single bar */
    export let capped: boolean = true;
    /** margin in pixels between stepper and your wrapping component */
    export let margin: number = 4;

    const dispatch = createEventDispatcher();

    $: steps > 0 ? started = true : null

    

    const next = (e: Event) => {
        if (currentStep < steps) {
            currentStep += 1;
        } else {
            finished = true;
        }
        dispatch('forwards', {event: e, percent: Math.round(currentStep/steps * 100)});
    }

    const prev = (e: Event) => {
        if (currentStep > 0) {  
            currentStep -= 1;
        }
        dispatch('backwards', e);
    }

    let tweenedStepWidth = tweened(0, {
        duration: 300,
        easing: cubicOut,
    });

    $: $tweenedStepWidth = currentStep/steps * 100;

</script>

<main 
    style="
    --color:{color};
    --containerWidth:calc({width} - {3 * margin}px); 
    flex-direction:{capped && !simple ? 'column' : 'row'}; 
    align-items:{capped && !simple ? 'flex-start' : 'center'}"
    >
    <Button on:click={(e) => {prevStep != null ? prevStep({e, percent: Math.round(currentStep/steps * 100)}) : prev(e)}} color={color}>
        {backwards}
    </Button>
    
    {#if !capped}
    <div class="container">
        <div class="stepper-bar" style="--stepperWidth:{$tweenedStepWidth}%;--color:{color};"></div>
        <div class="stepper-bar-bg"></div>
    </div>
    {:else}
    <div class="capped-container">
        {#each Array(steps) as step, i}
            <div style="width:{100/steps}%" class="capped-width-limiter">
                <div class="capped-stepper-bar" 
                    style="width:{currentStep >= i+1 ? "calc(100% - 20px)" : "0%"}">
                </div>
                <div class="capped-stepper-bar-bg"></div>
                {#if i < steps - 1}
                <div class="stepper-cap" style="opacity:{currentStep >= i+1 ? "1" : ".2"};"></div>
                {/if}
                <!-- {#if i < steps - 1}
                <div class="stepper-cap-check">
                    <span class="material-icons">
                        check
                    </span>
                </div>
                {/if} -->
            </div>
        {/each}
    </div>
    {/if}


    <Button on:click={(e) => {nextStep != null ? nextStep({e, percent: Math.round(currentStep/steps * 100)}) : next(e)}} color={color}>
        <!-- {currentStep >= steps - 1 ? "finish" : "next"} -->
        {forwards}
    </Button>

</main>


<style>
    main {
        display: inline-flex;
        border: 2px solid var(--color);
        align-items: center;
        width: var(--containerWidth);
        margin: 4px;
    }
    .container {
        height: calc(100%-4px);
        flex-grow: 1; 
        position: relative;
    }
    .capped-container {
        height: calc(100%-4px);
        flex-grow: 1;
        display: flex;
        align-items: center; 
    }
    .capped-width-limiter {
        position: relative;
    }
    .stepper-bar {
        height: 4px;
        width: var(--stepperWidth);
        background-color: var(--color);
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translateY(-50%);
        z-index: 5;
    }
    .stepper-bar-bg {
        height: 4px;
        width: 100%;
        background: var(--color);
        opacity: .2;
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translateY(-50%);
        z-index: 3;
    }
    .capped-stepper-bar {
        height: 4px;
        width: 0%;
        background-color: var(--color);
        margin-left: 10px;
        transition: ease width 0.3s;
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translateY(-50%);
        z-index: 5;
    }
    .capped-stepper-bar-bg {
        height: 4px;
        width: calc(100% - 20px);
        background-color: var(--color);
        opacity: 0.2;
        margin-left: 10px;
        transition: ease width 0.3s;
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translateY(-50%);
        z-index: 3;
    }
    .stepper-cap {
        width: 10px;
        height: 10px;
        background: var(--color);
        opacity: 0.2;
        border-radius: 25px;
        position: absolute;
        top: 50%;
        right: calc(-5px);
        transform: translateY(-50%);
        transition: ease opacity 0.3s 0.1s, ease height 0.3s, ease width 0.3s;
    }


    /* TODO: Properly implement checkmarks on finished caps. */
    /* .stepper-cap-check {
        font-size: 15px !important;
        width: 16px;
        height: 16px;
        color: white;
        background-color: var(--color);
        opacity: 1;
        border-radius: 25px;
        position: absolute;
        top: 50%;
        right: calc(-8px);
        transform: translateY(-50%);
        transition: ease opacity 0.3s 0.1s;
    }

    .stepper-cap-check span {
        font-size: 15px;
        font-weight: 900;
    } */

</style>
