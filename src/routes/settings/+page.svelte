<script lang="ts">
	import language from "$lib/language";

    $: value = window.localStorage.getItem('language');
</script>

<h1>Primary Language = {value}</h1>
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