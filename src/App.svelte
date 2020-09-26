<script>
	import Button from './components/Button.svelte'
	import Navbar from './components/Navbar.svelte'
	import Table from './components/Table.svelte'
	import Header from './components/Header.svelte'
</script>

<Navbar>
	<div slot="left-side">
		Nate
	</div>
	<div slot="right-side">
		Seth
	</div>
</Navbar>

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
			<td><Button>Basic button</Button></td>
			<td><Button color="red">Red button</Button></td>
			<td><Button icon="assignment">Icon Button</Button></td>
			<td><Button icon="assignment"></Button></td>
			<td><Button disabled=true>Disabled button</Button></td>
		</tr>
		<tr>
			<td><Button inverted={true}>Inverted button</Button></td>
			<td><Button color="deepskyblue" inverted=true>Blue inverted button</Button></td>
			<td><Button icon="assignment" inverted=true>Inverted Icon Button</Button></td>
			<td><Button icon="assignment" inverted=true></Button></td>
			<td><Button disabled=true inverted=true>Disabled Inverted button</Button></td>
		</tr>
	</Table>

	<br>

	<Table>
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
				<td style="padding-right: 0px"><Button color="red" icon="delete" size="1.25rem"></Button></td>
			</tr>
			<tr>
				<td>Berglunds snabbköp</td>
				<td>Christina Berglund</td>
				<td>Sweden</td>
				<td style="padding-right: 0px"><Button color="red" icon="delete" size="1.25rem"></Button></td>
			</tr>
			<tr>
				<td>Centro comercial Moctezuma</td>
				<td>Francisco Chang</td>
				<td>Mexico</td>
				<td style="padding-right: 0px"><Button color="red" icon="delete" size="1.25rem"></Button></td>
			</tr>
	</Table>
</main>

<style>
	main {
		height: 100%;
		width: 100%;
		padding-bottom: 600px;
	}
</style>
