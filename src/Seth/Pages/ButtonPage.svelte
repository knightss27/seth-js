<script>
    import Card from '../components/Card.svelte';
    import Button from '../components/Button.svelte';
    import ButtonGroup from '../components/ButtonGroup.svelte';
    import { fly } from 'svelte/transition'
    import { quintOut } from 'svelte/easing';
</script>

<div class="button-wrapper" out:fly="{{delay: 0, x: 500, duration: 300, easing: quintOut }}" in:fly="{{delay: 200, x: 500, duration: 300, easing: quintOut }}">
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
                        <div style="display: flex; align-items: center;">
                            <Button icon="edit" height="30px">Button</Button>
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

<style>
    div.button-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 50px;
        grid-column: 1/2;
		grid-row: 1/2;
    }

    div.button-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: center;
    }

    h3 {
        margin: 0px;
    }
</style>