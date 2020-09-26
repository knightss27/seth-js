<script>
    import Navbar from './Nate/components/Navbar.svelte'
    import {isNate} from './stores.js'
    import Nate from './Nate/Nate.svelte'
    import Seth from './Seth/Seth.svelte'

</script>

<Navbar>
    <div slot="left-side" on:click={() => {isNate.set(true)}}>
        Nate
    </div>
    <div slot="right-side" on:click={() => {isNate.set(false)}}>
        Seth
    </div>
</Navbar>

{#if $isNate}
<Nate />
{:else}
<Seth />
{/if}


