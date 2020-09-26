<script lang="ts">
    import Button from './components/Button.svelte'

</script>

<main>
    <h1>hi</h1>
    <Button>Button</Button>
    <Button filled={true}>Button</Button>
    <Button color="red">Button</Button>
    <Button color="red" filled={true}>Button</Button>
</main>


<style>
    h1 {
        color: black;
    }
</style>



