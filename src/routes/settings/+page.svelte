<script lang="ts">
	import language from "$lib/language";

    $: value = window.localStorage.getItem('language');
</script>

<div class="header"><h1>Settings</h1><a href="/"><img src="logo.png" alt="logo"></a></div>
<h2>Primary Language = {value}</h2>
<select name="language" bind:value={value} id="lang">
    <option value="python">Python</option>
    <option value="php">PHP</option>
    <option value="cpp">C++</option>
    <option value="cs">C#</option>
    <option value="js">JavaScript</option>
    <option value="ts">TypeScript</option>
    <option value="ruby">Ruby</option>
    <option value="go">GoLang</option>
    <option value="java">Java</option>
</select>
<button on:click={() => window.localStorage.setItem('language', typeof value == 'string' ? value : 'python')}>Save</button>

<style>
    .header {
        position: fixed;
        background: #1c1c1c;
        padding: 1rem;
        text-align: center;
        margin: 0;
        width: calc(100vw - 5rem);
        top: 0;
        left: 5rem;
        z-index: 9;
        /* margin-bottom: 10rem; */
    }

    .header img {
        width: 10rem;
        position: fixed;
        right: 0.75rem;
        top: 0.75rem;
    }

    @media only screen and (max-width: 600px) {
        .header img {
            position: relative;
            display: block;
            right: inherit;
            top: inherit;
        }
		.header {
            width: 100vw;
            /* margin-bottom: 5rem; */
            left: 0;
            top: 0;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
        }
	}
</style>