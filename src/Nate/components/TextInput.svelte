<script>
    export let name, placeholder = "";
</script>

<main>
    <label>
        <input type="text" name={name} placeholder={placeholder}>
    </label>
</main>

<style>
    input {
        border: 1px solid white;
        border-radius: 15px;
        margin: 2px;
        padding: 10px;
        background: transparent;
        color: white;
    }
</style>