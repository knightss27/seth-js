<script>
    import Button from './components/Button.svelte'
    import Table from './components/Table.svelte'
    import Header from './components/Header.svelte'
    import TextInput from './components/TextInput.svelte';
    import Dropdown from './components/Dropdown.svelte';
    import StyledDropdown from './components/StyledDropdown.svelte';

</script>

<wrapper>
    <main>
        <Header>Seth.js: the flexible component library for a responsive web.</Header>
    
        <Table title="Buttons">
            <tr>
                <th>Basic</th>
                <th>Colored</th>
                <th>Icon-text</th>
                <th>Icon</th>
                <th>Disabled</th>
            </tr>
            <tr>
                <td>
                    <Button>Basic button</Button>
                </td>
                <td>
                    <Button color="red">Red button</Button>
                </td>
                <td>
                    <Button icon="assignment">Icon Button</Button>
                </td>
                <td>
                    <Button icon="edit"></Button>
                </td>
                <td>
                    <Button disabled=true>Disabled button</Button>
                </td>
            </tr>
            <tr>
                <td>
                    <Button inverted={true}>Inverted button</Button>
                </td>
                <td>
                    <Button color="deepskyblue" inverted=true>Blue inverted button</Button>
                </td>
                <td>
                    <Button icon="assignment" inverted=true>Inverted Icon Button</Button>
                </td>
                <td>
                    <Button icon="edit" inverted=true></Button>
                </td>
                <td>
                    <Button disabled=true inverted=true>Disabled Inverted button</Button>
                </td>
            </tr>
        </Table>
    
        <br>
    
        <Table>
            <span slot="header-button"><Button icon="add" inverted=true size="1rem">Add Record</Button></span>
            <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
                <th></th>
            </tr>
            <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                <td style="padding-right: 0px">
                    <Button color="red" icon="delete" size="1.25rem"></Button>
                </td>
            </tr>
            <tr>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>Sweden</td>
                <td style="padding-right: 0px">
                    <Button color="red" icon="delete" size="1.25rem"></Button>
                </td>
            </tr>
            <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                <td style="padding-right: 0px">
                    <Button color="red" icon="delete" size="1.25rem"></Button>
                </td>
            </tr>
        </Table>
    
        <br>
    
        <Table title="Inputs">
            <tr>
                <th>TextInput</th>
                <th>Dropdown</th>
                <th>StyledDropdown</th>
            </tr>
            <tr>
                <td>
                    <TextInput placeholder="Hello World..."></TextInput>
                </td>
                <td>
                    <Dropdown>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </Dropdown>
                </td>
                <td>
                    <StyledDropdown>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </StyledDropdown>
                </td>
            </tr>
        </Table>
    </main>
</wrapper>


<style>
    main {
        height: 100%;
        width: 75%;
        padding-bottom: 600px;
        margin: auto;
    }
    wrapper {
        display: flex;
        width: 100%;
        background: black;
    }
</style>