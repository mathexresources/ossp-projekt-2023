<script lang="ts">
    export let section: string;

    const filePromise = import(/* @vite-ignore */ `../materials/${section}.json`)

    // import ifStatement from '../../lib/materials/ifStatement.json'
    let languageSelected = typeof window.localStorage.getItem("language") == 'string' ? window.localStorage.getItem("language") : "python";

    function changeLang(toChange: string) {
        languageSelected = toChange;
    }
</script>

{#await filePromise}
    <h1>Loading</h1>
{:then sect}
    <pre>
        <ul>
            {#each sect.languages as lang}
                <li><button class="{languageSelected == lang.name ? "active" : ""}" on:click|preventDefault={() => changeLang(lang.name)}>{lang.displayName}</button></li>
            {/each}
        </ul>
        {#each sect.languages as lang}
            {#if languageSelected == (lang.name) && languageSelected != "diagram"}
                <div><code>{lang.body}</code></div>
            {:else if languageSelected == "diagram" && lang.name == "diagram"}
                <div class="center"><img src="{lang.url}" alt="Diagram"></div>
            {/if}
        {/each} 
    </pre>
{/await}

<style>
    pre {
        display: flex;
        flex-direction: column;
        margin-block: 2rem;
    }

    ul {
        background: rgb(99, 99, 99);
        border-top-right-radius: 1rem;
        border-top-left-radius: 1rem;

        padding: .5rem;
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
    }

    code {
        font-size: 1.5vw;
    }

    button {
        margin: .25rem;
        padding: 1rem;
        color: white;
        border-radius: 5px;
        border: 0;
        background: #414141;
        font-size: 1vw;
        position: relative;
    }

    .active {
        border-radius: 5px;
        background: #377ec5 !important;
    }

    button:hover {
        background: #124477;
        cursor: pointer;
    }


    div {
        background: rgb(28, 30, 28);
        padding: 2vw;
        /* margin: 1rem; */
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .center {
        display: flex;
        justify-content: center;
    }

    @media only screen and (max-width: 600px) {
		:root {
            font-size: 12px;
        }

        button {
            font-size: 3vw;
        }
        code {
            font-size: 3vw;
        }

        pre {
            margin-bottom: 1rem;
        }
	}

    /* @media screen and (min-width: 568px) {
        code {
            font-size: calc(10px + 16 * ((100vw - 700px)));
        }
    } */
</style>
