<script lang="ts">
    import Button from './Button.svelte'
    import { tweened } from 'svelte/motion'
    import { cubicOut } from 'svelte/easing';

    /** button and outline color */
    export let color: string = "black";
    /** component width */
    export let width: string = "95%";
    /** should show checkmarks? */
    export let simple: boolean = true;

    //logic exports
    export let steps: number = 4;
    export let nextStep: () => void = null;
    export let prevStep: () => void = null;
    export let currentStep: number = 0;
    export let finished: boolean = false;
    export let started: boolean = false;


    //derived
    export let capped: boolean = true;

    $: if (capped) {width = "95%"}
    $: steps > 0 ? started = true : null

    const next = () => {
        if (currentStep < steps) {
            console.log('forward')
            currentStep += 1;
        } else {
            finished = true;
        }
    }

    const prev = () => {
        if (currentStep > 0) {
            currentStep -= 1;
        }
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
    --containerWidth:{width}; 
    flex-direction:{capped && !simple ? 'column' : 'row'}; 
    align-items:{capped && !simple ? 'flex-start' : 'center'}"
    >
    <Button on:click={prevStep != null ? prevStep : prev} color={color}>Previous</Button>
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
                {:else if i < steps - 1 && i <= currentStep - 2}
                <div class="stepper-cap-check">
                    <span class="material-icons">
                        check
                    </span>
                </div>
                {/if}
            </div>
        {/each}
    </div>
    {/if}


    <Button on:click={nextStep != null ? nextStep : next} color={color}>
        <!-- {currentStep >= steps - 1 ? "finish" : "next"} -->
        next
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
    .stepper-cap-check {
        font-size: 1rem !important;
        width: 10px;
        height: 10px;
        color: var(--color);
        opacity: 1;
        border-radius: 25px;
        position: absolute;
        top: 50%;
        right: calc(-5px);
        transform: translateY(-50%);
        transition: ease opacity 0.3s 0.1s;
    }

</style>
