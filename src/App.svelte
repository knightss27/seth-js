<script lang="ts">
    import Navbar from './Nate/components/Navbar.svelte'
    import {isNate} from './stores.js'
    import Nate from './Nate/Nate.svelte'
    import Seth from './Seth/Seth.svelte'
    import {wrap} from 'svelte-spa-router/wrap'

    const routes = {
        '*': Seth,
    }

</script>

<Seth />


