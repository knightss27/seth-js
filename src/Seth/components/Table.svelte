<script>
    let tableWidth = 0;
    let selectorWidth = 0;
    let selectorHeight = 0;
    let selectorPosition = 0;
    let selectorPositionY = 0;
    let selectorVisible = false;
    let mainOffset = 0;


    const testData = { 
        headers: ["Company", "Contact", "Country"],
        rows: [
            ["Alfreds Futterkiste", "Maria Anders", "Germany"],
            ["Berglunds snabbkop", "Christina Berglund", "Sweden"],
            ["Centro comercial Moctezuma", "Francisco Chang", "Mexico"]
        ]
    }


    function handleMousemove(e) {
        let rect = e.target.getBoundingClientRect();
        let main = e.target.offsetParent.getBoundingClientRect();
        selectorPositionY = rect.top;
        selectorPosition = rect.left;
        selectorWidth = rect.right - rect.left;
        selectorHeight = rect.bottom - rect.top;
        mainOffset = main.left;

    }

    function handleMouseout(event) {
        selectorVisible = false;
    }

</script>

<main>
    <table on:mousemove={handleMousemove} bind:clientWidth={tableWidth} on:mouseout={handleMouseout} on:mouseover={(e) => {selectorVisible = true;}}>
        <thead>
            <tr>
                {#each testData.headers as header, index}
                <th>{header}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each testData.rows as row, index}
            <tr>
                {#each row as item}
                <td>
                    {item}
                </td>
                {/each}
            </tr>
            {/each}
        </tbody>
        <div class="selector" style="--left:{selectorPosition}px; --mainOffset:{mainOffset}px; --selectorWidth:{selectorWidth}px;" class:selectorVisible={!selectorVisible}></div>
    </table>
</main>

<div class="selector-main-grey" style="--left:{selectorPosition}px; --mainOffset:{mainOffset}px; --top:{selectorPositionY}px; --selectorHeight:{selectorHeight}px; --tableWidth:{tableWidth}px" class:selectorVisible={!selectorVisible}></div>
<div class="selector-main" style="--left:{selectorPosition}px; --selectorWidth:{selectorWidth}px; --top:{selectorPositionY}px; --selectorHeight:{selectorHeight}px" class:selectorVisible={!selectorVisible}></div>


<style>
    main {
        width: 60%;
        position: relative;
        border: 2px solid black;
        margin: 5px;
        /* color: black; */
    }

    table {
        width: 100%;
        border-collapse: collapse;
        overflow: hidden;
        position: relative;
    }

    th, td {
        text-align: left;
        
        padding: 5px 10px;
        position: relative;
        cursor: default;
        transition: ease color 0.7s;
        color: black;
    }

    th {
        border-bottom: 3px solid black;
    }

    tbody > tr {
        border-top: 2px solid black;
    }

    td:not(:first-child), th:not(:first-child) {
        border-left: 2px solid black;
    }

    td:hover, th:hover {
        color: white;
        
    }

    .selector-main {
        width: var(--selectorWidth);
        height: var(--selectorHeight);
        position: absolute;
        top: var(--top);
        left: var(--left);
        background: black;
        z-index: -1;
        transition: ease top 0.4s, ease left 0.4s, ease width 0.4s, ease background 0.7s, ease height 0.4s;
    }

    .selector-main-grey {
        width: var(--tableWidth);
        height: var(--selectorHeight);
        position: absolute;
        top: var(--top);
        left: var(--mainOffset);
        background: rgba(0, 0, 0, 0.1);
        z-index: -1;
        transition: ease top 0.4s, ease left 0.4s, ease width 0.4s, ease height 0.4s, ease background 0.7s;
    }

    .selector {
        height: 100%;
        width: var(--selectorWidth);
        position: absolute;
        top: 0;
        left: calc(var(--left) - var(--mainOffset));
        z-index: -2;
        margin: 0px;
        background-color: rgba(0, 0, 0, 0.1);
        transition: ease width .4s, ease left .4s;
    }

    .selectorVisible {
        background: transparent;
    }

</style>