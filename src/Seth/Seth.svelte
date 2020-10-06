<script lang="ts">
    import Snackbar from './components/Snackbar.svelte';
    import SnackbarGroup from './components/SnackbarGroup.svelte'
    import { SnackBars } from '../stores'
    import Button from './components/Button.svelte'
    import ButtonGroup from './components/ButtonGroup.svelte';
    import Table from './components/Table.svelte';

    let test :boolean = false;
    let test2 :boolean = false;

    function addSnackbar(status, message, color, timeout) {
        const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        let done = false;
        $SnackBars[id] = {status, message, color, timeout, done}
    }

</script>

<main>
    <h1>hi</h1>
    <Button >Button</Button>
    <Button filled={true}>Button</Button>
    <Button color="red">Button</Button>
    <Button color="red" filled={true}>Button</Button>
    <Button icon="edit">Button</Button>
    <Button icon="edit"></Button>
    <Button disabled={true}>Button</Button>
    <Button filled={true} disabled={true}>Button</Button>
    
    <ButtonGroup width="400px">
        <div>
            Button 1
        </div>
        <div>
            Button 2
        </div>
        <div>
            Button 3
        </div>
    </ButtonGroup>
    <Table></Table>
    <Button color="green" on:click={() => {addSnackbar("200", "Success", "green", 1000)}}>Add snackbar</Button>
    <SnackbarGroup />
    <Snackbar message="test" color="green" open={test}></Snackbar>    
</main>


<style>
    h1 {
        color: black;
    }
    main {
        width: 100%;
    }
</style>



