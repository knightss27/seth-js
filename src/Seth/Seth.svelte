<script lang="ts">
    import Snackbar from './components/Snackbar.svelte';
    import SnackbarGroup from './components/SnackbarGroup.svelte'
    import { SnackBars } from '../stores'
    import Button from './components/Button.svelte'
    import ButtonGroup from './components/ButtonGroup.svelte';
    import Table from './components/Table.svelte';
    import Stepper from './components/Stepper.svelte';
    import { addSnackbar } from './utils'
    import FlexSelect from './components/FlexCheckbox.svelte';
    import RadioButton from './components/RadioButton.svelte';
    import Navbar from './components/Navbar.svelte';
    import Card from './components/Card.svelte';
    import {location} from 'svelte-spa-router'
    import ButtonPage from './Pages/ButtonPage.svelte';
    import Hero from './Pages/Hero.svelte';
    import {fade} from 'svelte/transition'
    import SnackbarPage from './Pages/SnackbarPage.svelte';
    import TextInput from './components/TextInput.svelte';
    import StepperPage from './Pages/StepperPage.svelte';

    const pages = ['/', '/buttons', '/snackbars', '/stepper']

    let options = ['1', '2', '3']

    let test :boolean = false;
    let test2 :boolean = false;

    let selected = '1';

    let next = null;
    let last = null;

    $: if ($location) {
        console.log($location);
        const current = pages.indexOf($location)
        next = '#' + pages[Math.min(current + 1, pages.length - 1)]
        last = '#' + pages[Math.max(0, current - 1)]
    }

    let button = null;

</script>

<Navbar>
    <h1 slot="brand">seth.js</h1>
    <!-- <h3>{$location}</h3> -->
    <div class="buttons">
        <Button>Nav 1</Button>
        <Button>Nav 2</Button>
    </div>
</Navbar>

<main>
    <div class="gallery-wrapper">
    {#if $location == pages[0]}
        <Hero />    
    {:else if $location == pages[1]}
        <ButtonPage button={button} />
    {:else if $location == pages[2]}
        <SnackbarPage button={button}/>
    {:else if $location == pages[3]}
        <StepperPage button={button}/>
    {/if}
    </div>

    <div class="switch-buttons">
        <Button icon="chevron_left" href={last} on:click={() => button = 'back'}>back</Button>
        <Button icon="chevron_right" flipped={true} href={next} on:click={() => button = 'next'}>next</Button>
    </div>
    

    <!-- <Button color="green" on:click={() => {addSnackbar("200", "Created new snackbar!", "green", 50000)}}>Add snackbar</Button>
    <SnackbarGroup />
    <div style={'width: 90%;'}>
        <Stepper color="black" steps={4} currentStep={2} on:forwards={(e) => {console.log('forwards!', e.detail)}}></Stepper>
    </div>
    
    <br>
    <div class="main-container">
        {#each options as option}
        <RadioButton bind:group={selected} id={option} on:click={() => console.log('clicked')}>
            <div class="select-card" class:selected={selected == option}>
                <div class="select-card-header">
                    option {option}
                </div>
                <div class="select-card-body">
                    <span><b>CPU</b> : 4x 2.2 GHz</span>
                    <span><b>RAM</b> : 8GB</span>
                    <span><b>SSD</b> : 2TB</span>
                </div>
            </div>
        </RadioButton>
        {/each}
        current selected option: {selected}
    </div>
    <Card>
        <h3 slot="header">
            Card Header
        </h3>
        <div class="body" slot="body">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur fugiat dolorum quos, error velit sint enim. Quam, tempore veritatis reiciendis explicabo atque necessitatibus rem, aliquid alias, inventore incidunt qui fuga.
        </div>

        <img slot="img" width="100%" alt="card media" src="Hummingbird.jpg">
    </Card> -->
    <!-- <FlexSelect nodes={[{name: 'test'}, {name: 'tst'}]}/> -->
</main>


<style>

    h3 {
        margin: 0px;
    }

    h1 {
        margin: 0px 6px 4px;
        padding: 0px;
        flex-grow: 1;
    }

    main {
        width: 100%;
    }

    div.gallery-wrapper {
        display: grid;
        overflow-x: hidden;
    }

    div.switch-buttons {
        display: flex;
        justify-content: center;
    }

    div.buttons {
        display: flex;
        justify-self: flex-end;
        margin-right: 5px;
    }
    
    div.select-card {
        display: flex;
        color: black;
        width: 100px;
        height: 100px;
        box-shadow: 2px 2px lightgrey;
        border: 2px solid grey;
        flex-direction: column;
        align-items: center;
        margin: 5px;
        cursor: pointer;
    }

    div.select-card-header {
        margin-top: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid grey;
        width: 100%;
        text-align: center;
    }

    div.selected {
        border: 2px solid black;
        box-shadow: none;
        transform: translate(2px, 2px);
        margin: 5px;
    }

    div.select-card-body {
        display: flex;
        flex-direction: column;
        margin-top: 5px;
    }

    div.select-card-body span {
        font-size: 0.7rem;
    }

    /* div.select-card {
        display: flex;
        color: black;
        width: 100px;
        height: 100px;
        border-radius: 15px !important;
        box-shadow: 3px 3px 2px lightgrey;
        flex-direction: column;
        align-items: center;
        margin: 6px;
        cursor: pointer;
    }

    div.select-card-header {
        margin-top: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid grey;
        width: 100%;
        text-align: center;
    }

    div.selected {
        border: 1px solid black;
        margin: 5px;
    }

    div.select-card-body {
        display: flex;
        flex-direction: column;
        margin-top: 5px;
    }

    div.select-card-body span {
        font-size: 0.7rem;
    } */

    div.main-container {
        display: flex;
        flex-wrap: wrap;
        color: black;
    }
</style>



