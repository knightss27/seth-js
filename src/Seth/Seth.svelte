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

    let options = ['1', '2', '3']

    let test :boolean = false;
    let test2 :boolean = false;

    let selected = '1';

</script>

<Navbar>
    <h1 slot="brand">Seth.js</h1>
    <div class="buttons">
        <Button>Nav 1</Button>
        <Button>Nav 2</Button>
    </div>
</Navbar>

<main>
    <div class="button-wrapper">
        <Card width="min(500px, calc(100% - 14px))" height="auto" elevation={0}>
            <div slot="header">Buttons</div>
            <div slot="body" style="width: 100%; display: flex; flex-direction: column; align-items: center; margin-left: -5px;">
                <div style="width: 100%; display: flex; flex-wrap: wrap; justify-content: center;">
                    <Card width="min(200px, 90%)" height="90px" style={"flex-grow: 1"}>
                        <div class="button-section">
                            <h3>Basis</h3>
                            <div style="display: flex;">
                                <Button >Button</Button>
                                <Button filled={true}>Button</Button>
                            </div>
                        </div>
                    </Card>
        
                    <Card width="200px" height="90px" style={"flex-grow: 1"}>
                        <div class="button-section">
                            <h3>Colored</h3>
                            <div style="display: flex">
                                <Button color="red">Button</Button>
                                <Button color="red" filled={true}>Button</Button>
                            </div>
                        </div>
                    </Card>
        
                    <Card width="200px" height="90px" style={"flex-grow: 1"}>
                        <div class="button-section">
                            <h3>Icon</h3>
                            <div style="display: flex">
                                <Button icon="edit">Button</Button>
                                <Button icon="edit"></Button>
                            </div>
                        </div>
                    </Card>
        
                    <Card width="200px" height="90px" style={"flex-grow: 1"}>
                        <div class="button-section">
                            <h3>Disabled</h3>
                            <div style="display: flex">
                                <Button disabled={true}>Disabled</Button>
                                <Button filled={true} disabled={true}>Disabled</Button>
                            </div>
                        </div>
                    </Card>
                </div>
                
                <h3 style="margin-top: 10px">Button Group</h3>
                <ButtonGroup width="calc(100% - 10px)">
                    <div>
                        Button 1
                    </div>
                    <div>
                        Button 2
                    </div>
                    <!-- <div>
                        Button 3
                    </div>
                    <div>
                        Button 3
                    </div> -->
                </ButtonGroup>
            </div>
        </Card>     
    </div>

    <!-- <Button color="green" on:click={() => {addSnackbar("200", "Created new snackbar!", "green", 50000)}}>Add snackbar</Button>
    <SnackbarGroup />
    <div style={'width: 90%;'}>
        <Stepper color="black" steps={3}></Stepper>
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

    div.button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
        margin-top: 20px;
    }

    div.button-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
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



