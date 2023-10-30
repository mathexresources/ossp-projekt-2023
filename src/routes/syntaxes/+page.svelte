<script lang="ts">
	import CodeDescription from "$lib/components/CodeDescription.svelte";
import CodePiece from "$lib/components/CodePiece.svelte";
    // let names = ["dataTypes", "array", "ifStatement", "forLoops", "functions"];

    import dataTypes from '$lib/materials/dataTypes.json'
</script>
<div class="header"><h1>Syntaxes</h1><a href="/"><img src="logo.png" alt="logo"></a></div>

<div class="container">
    <div class="left">
        <h2>Data Types</h2>
        <p>Datové typy určují, jakým způsobem se data uloží a zpracovávají v počítači.<br> Každý datový typ má vlastnosti a omezení, které určují, jakým způsobem se data chovají.</p>
    </div>
    <div class="right">
        <CodePiece sectionName="dataTypes" />
    </div>
</div>
<hr>

<div class="container">
    <div class="left">
        <h2>Array (Pole)</h2>
        <p><span style="font-weight: bold; color: white;">Co to je:</span><br> Datová struktura, která sdružuje daný vždy konečný počet prvků (čísel, textových řetězců, …) stejného datového typu, v určitých jazycích nemusí být stejný typ (Python, PHP, JavaScript, Ruby). K jednotlivým prvkům pole se přistupuje pomocí jejich indexu (celého čísla, označujícího pořadí prvku v rámci pole). Velikost pole zůstává při běhu programu neměnná (některé programovací jazyky toto omezení nekladou, zvětšení pole je ale časově náročná operace).<br><br><span style="font-weight: bold; color: white;">Rozdělení:</span><br> - Statická pole - jsou pole s pevně daným počtem prvků.<br> - Dynamická pole - jsou pole s proměnlivým počtem prvků.</p>
        <p>Datové typy určují, jakým způsobem se data uloží a zpracovávají v počítači.<br> Každý datový typ má vlastnosti a omezení, které určují, jakým způsobem se data chovají.</p>
    </div>
    <div class="right">
        <CodePiece sectionName="array" />
    </div>
</div>
<hr>

<div class="container">
    <div class="left">
        <h2>Podmíněné větvení</h2>
        <p>Podmíněné větvení (podmínky) umožňují, aby se skript nechoval stále stejně, ale reagoval na různé situace. Nejčastěji reaguje na vstup od uživatele nebo různé události (např. že požadovaný článek neexistuje).<br>Podmínka se zapísuje pomocí klíčového slova if, za kterým následuje v závorce logický výraz. Pokud je výraz pravdivý, vykoná se následující příkaz. Pokud ne, následující příkaz vykonán nebude a program pokračuje až pod ním.<br><br><span style="font-weight: bold; color: white;">Možnosti</span><br> - If - Zkusí podmínku jestli je pravdivá, pokud je, tak spustí vnitřek a poté vyleze ven a pokračuje<br> - Else-if - Program zkusí else-if, když je první podmínka nepravdivá - spustí se else<br> - Else - Zkusí podmínku jestli je pravdivá, pokud ne, pokračuje na kód, který je v else bloku</p>
    </div>
    <div class="right">
        <CodePiece sectionName="ifStatement" />
    </div>
</div>
<hr>

<div class="container">
    <div class="left">
        <h2>Cykly</h2>
        <p>Cyklus v programování je to řídící struktura kódu, která zajišťuje, že se část kódu několikrát opakuje v závislosti na splnění určité podmínky<br><br> Běžně by se daly cykly rozdělit na:<br> - s podmínkou na začátku (while-do cyklus)<br> - s podmínkou na konci (do-while cyklus)<br> - s pevným počtem opakování (tzv. for cyklus) Průchod tělem cyklu se někdy nazývá iterace.</p>
    </div>
    <div class="right">
        <CodePiece sectionName="forLoops" />
    </div>
</div>
<hr>

<div class="container">
    <div class="left">
        <h2>Funkce</h2>
        <p>V programování je funkce část programu, kterou je možné opakovaně volat z různých míst kódu. Funkce může mít argumenty (též parametry) – údaje, které jí jsou předávány při volání – a návratovou hodnotu, kterou naopak vrací. Na rozdíl od funkce v matematice nemusí výsledek funkce v programu záviset jen na jejích argumentech – v průběhu svého běhu může samostatně získávat data z paměti nebo jiných vstupů a provádět i výstupní operace, takže návratová hodnota zdaleka nemusí být jejím jediným výsledkem (viz vedlejší účinek) a funkce také nemusí mít žádné formální parametry (typ. funkce vracející hodnotu stisknuté klávesy). Často nemusí funkce vracet žádnou hodnotu, potom se taková funkce může nazývat procedurou. V objektově orientovaném programování se funkce náležející nějaké třídě nazývají metodami.</p>
    </div>
    <div class="right">
        <CodePiece sectionName="functions" />
    </div>
</div>
<hr>

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

<!-- <style>
    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media only screen and (max-width: 600px) {
		.container {
            flex-direction: column;
        }

        /* code {
            font-size: 10px;
        } */
	}
</style> -->
<!-- <h1>{window.localStorage.getItem('language')}</h1> -->