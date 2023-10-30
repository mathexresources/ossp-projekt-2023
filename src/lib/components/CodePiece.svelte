<script lang="ts">
    let languageSelected = typeof window === "undefined" ? "python" : typeof window.localStorage.getItem("language") == 'string' ? window.localStorage.getItem("language") : "python";

    export let sectionName: string;

    function changeLang(toChange: string) {
        languageSelected = toChange;
    }

	import { HighlightSvelte } from "svelte-highlight";
	import { javascript } from "svelte-highlight/languages";
    import atomOneDark from "svelte-highlight/styles/atom-one-dark";
</script>

<svelte:head>
  {@html atomOneDark}
</svelte:head>

<!-- <pre>
    <ul>
        {#each jsonFile.languages as lang}
            <li><button class="{languageSelected == lang.name ? "active" : ""}" disabled={lang.name == "diagram"} on:click|preventDefault={() => changeLang(lang.name)}>{lang.displayName}</button></li>
        {/each}
    </ul>
    {#each jsonFile.languages as lang}
        {#if languageSelected == (lang.name) && languageSelected != "diagram"}
             <div><code class="prettyprint lang-{lang.name}">{lang.body}</code></div>
            <HighlightSvelte code={lang.body} />
        {:else if languageSelected == "diagram" && lang.name == "diagram"}
            <div class="center"><img src="{lang.url}" alt="Diagram"></div>
        {/if}
    {/each} 
</pre> -->
<pre>
    <ul>
        <li><button class="{languageSelected == "python" ? "active" : ""}" on:click|preventDefault={() => changeLang("python")}>Python</button></li>
        <li><button class="{languageSelected == "php" ? "active" : ""}" on:click|preventDefault={() => changeLang("php")}>PHP</button></li>
        <li><button class="{languageSelected == "cpp" ? "active" : ""}" on:click|preventDefault={() => changeLang("cpp")}>C++</button></li>
        <li><button class="{languageSelected == "js" ? "active" : ""}" on:click|preventDefault={() => changeLang("js")}>JavaScript</button></li>
        <li><button class="{languageSelected == "ts" ? "active" : ""}" on:click|preventDefault={() => changeLang("ts")}>TypeScript</button></li>
        <li><button class="{languageSelected == "java" ? "active" : ""}" on:click|preventDefault={() => changeLang("java")}>Java</button></li>
        <li><button class="{languageSelected == "cs" ? "active" : ""}" on:click|preventDefault={() => changeLang("cs")}>C#</button></li>
        <li><button class="{languageSelected == "go" ? "active" : ""}" on:click|preventDefault={() => changeLang("go")}>GoLang</button></li>
        <li><button class="{languageSelected == "ruby" ? "active" : ""}" on:click|preventDefault={() => changeLang("ruby")}>Ruby</button></li>

        <!-- on:click|preventDefault={() => changeLang("diagram")} -->
        <li><button class="{languageSelected == "diagram" ? "active" : ""}" disabled>Diagram</button></li>
    </ul>
    {#if sectionName == "dataTypes"}
        {#if languageSelected === "python"}
            <HighlightSvelte code={"x = False #boolean\nx = \"Hello World\" #string\nx = 20 #intiger\nx = 20.5 #float\nx = 1j #complex\nx = [\"apple\", \"banana\", \"cherry\"] #list\nx = (\"apple\", \"banana\", \"cherry\") #tuple\nx = range(6) #range\nx = {\"name\" : \"John\", \"age\" : 36} #dict\nx = {\"apple\", \"banana\", \"cherry\"} #set\nx = frozenset({\"apple\", \"banana\", \"cherry\"}) #frozenset\nx = True #bool\nx = b\"Hello\" #bytes\nx = bytearray(5) #bytearray\nx = memoryview(bytes(5)) #memoryview\nx = None\n"} lang="python" />
        {:else if languageSelected === "php"}
            <HighlightSvelte code={"$x = \"Hello world!\"; //string\n$x = 20; //intiger\n$x = 3.14; //float\n$x = false; //boolean\n$x = [\"apple\", \"banana\", \"cherry\"]; //array\n"} lang="php" />
        {:else if languageSelected === "cpp"}
            <HighlightSvelte code={"string x = \"Hello\";     // string\nint x = 5;               // integer\nfloat x = 5.99;     // floating point number\nbool x = true;       // boolean\nchar x = 'D';         // character"} lang="cpp" />
        {:else if languageSelected === "js"}
            <HighlightSvelte code={"let x = \"Yellow\"; // string\nlet x = 16; // Numbers\nlet x = 7.5; // Numbers\nlet x = false; // boolean\nconst x = {firstName:\"John\", lastName:\"Doe\"}; // object\nconst x = [\"Saab\", \"Volvo\", \"BMW\"]; // array\nconst x = new Date(\"2022-03-25\"); // date"} lang="javascript" />
        {:else if languageSelected === "ts"}
            <HighlightSvelte code={"let x = \"Yellow\"; // string\nlet x = 16; // Numbers\nlet x = 7.5; // Numbers\nlet x = false; // boolean\nconst x = {firstName:\"John\", lastName:\"Doe\"}; // object\nconst x = [\"Saab\", \"Volvo\", \"BMW\"]; // array\nconst x = new Date(\"2022-03-25\"); // date"} lang="typescript" />
        {:else if languageSelected === "java"}
            <HighlightSvelte code={"String x = \"Hello\"; // string\nint x = 5; // integer (whole number)\nfloat x = 5.99f; // floating point number\nboolean x = true; // boolean\nchar x = 'D'; // character"} lang="java" />
        {:else if languageSelected === "cs"}
            <HighlightSvelte code={"string x = \"Hello\"; // string\nint x = 5; // integer (whole number)\nfloat x = 5.99f; // floating point number\nboolean x = true; // boolean\nchar x = 'D'; // character"} lang="csharp" />
        {:else if languageSelected === "go"}
            <HighlightSvelte code={"var x string = \"Hi!\" // string\nvar x int = 5 // integer\nvar x float32 = 3.14  // floating point number\nvar x bool = true // boolean"} lang="golang" />
        {:else if languageSelected === "ruby"}
            <HighlightSvelte code={"x = \"Hello World\" #string\nx = 20 #intiger\nx = 20.5 #float\nx = 1j #complex\nx = [\"apple\", \"banana\", \"cherry\"] #list\nx = false # boolean"} lang="ruby" />
        {/if}
    {:else if sectionName === "array"}
        {#if languageSelected === "python"}
            <HighlightSvelte code={"x = [1, 2, 3, 4]"} lang="python" />
        {:else if languageSelected === "php"}
            <HighlightSvelte code={"$x = [1, 2, 3, 4];"} lang="php" />
        {:else if languageSelected === "cpp"}
            <HighlightSvelte code={"int[] x = {1, 2, 3, 4};"} lang="cpp" />
        {:else if languageSelected === "js"}
            <HighlightSvelte code={"let x = [1, 2, 3, 4];"} lang="javascript" />
        {:else if languageSelected === "ts"}
            <HighlightSvelte code={"let x: Number[] = [1, 2, 3, 4];"} lang="typescript" />
        {:else if languageSelected === "java"}
            <HighlightSvelte code={"int[] x = {1, 2, 3, 4};"} lang="java" />
        {:else if languageSelected === "cs"}
            <HighlightSvelte code={"int[] x = {1, 2, 3, 4};"} lang="csharp" />
        {:else if languageSelected === "go"}
            <HighlightSvelte code={"x := [4]int{1, 2, 3, 4}"} lang="golang" />
        {:else if languageSelected === "ruby"}
            <HighlightSvelte code={"x = Array[1, 2, 3, 4]"} lang="ruby" />
        {/if}
    {:else if sectionName === "ifStatement"}
        {#if languageSelected === "python"}
            <HighlightSvelte code={"x = 10\nif x > 5:\n    print(\"x je větší než 5\")\nelif x < 0:\n    print(\"x je menší než 0\")\nelse:\n    print(\"x je mezi 0 a 5\")"} lang="python" />
        {:else if languageSelected === "php"}
            <HighlightSvelte code={"$x = 10;\nif ($x > 5) {\n    echo \"x je větší než 5\";\n} else if ($x < 0) {\n    echo \"x je menší než 0\";\n} else {\n    echo \"x je mezi 0 a 5\";\n}"} lang="php" />
        {:else if languageSelected === "cpp"}
            <HighlightSvelte code={"int x = 10;\nif (x > 5) {\n    std::cout << \"x je větší než 5\";\n} else if (x < 0) {\n    std::cout << \"x je menší než 0\";\n} else {\n    std::cout << \"x je mezi 0 a 5\";\n}"} lang="cpp" />
        {:else if languageSelected === "js"}
            <HighlightSvelte code={"let x = 10;\nif (x > 5) {\n    console.log(\"x je větší než 5\");\n} else if (x < 0) {\n    console.log(\"x je menší než 0\");\n} else {\n    console.log(\"x je mezi 0 a 5\");\n}"} lang="javascript" />
        {:else if languageSelected === "ts"}
            <HighlightSvelte code={"let x: Number = 10;\nif (x > 5) {\n    console.log(\"x je větší než 5\");\n} else if (x < 0) {\n    console.log(\"x je menší než 0\");\n} else {\n    console.log(\"x je mezi 0 a 5\");\n}"} lang="typescript" />
        {:else if languageSelected === "java"}
            <HighlightSvelte code={"int x = 10;\nif (x > 5) {\n    System.out.println(\"x je větší než 5\");\n} else if (x < 0) {\n    System.out.println(\"x je menší než 0\");\n} else {\n    System.out.println(\"x je mezi 0 a 5\");\n}"} lang="java" />
        {:else if languageSelected === "cs"}
            <HighlightSvelte code={"int x = 10;\nif (x > 5) {\n    Console.WriteLine(\"x je větší než 5\");\n} else if (x < 0) {\n    Console.WriteLine(\"x je menší než 0\");\n} else {\n    Console.WriteLine(\"x je mezi 0 a 5\");\n}"} lang="csharp" />
        {:else if languageSelected === "go"}
            <HighlightSvelte code={"int x := 10\nif x > 5 {\n    fmt.Println(\"x je větší než 5\")\n} else if x < 0 {\n    fmt.Println(\"x je menší než 0\")\n} else {\n    fmt.Println(\"x je mezi 0 a 5\");\n}"} lang="golang" />
        {:else if languageSelected === "ruby"}
            <HighlightSvelte code={"x = 10\nif x > 5 then\n    puts \"x je větší než 5\"\nelsif x < 0 then\n    puts \"x je menší než 0\"\nelse \n    puts \"x je mezi 0 a 5\"\nend"} lang="ruby" />
        {/if}
    {:else if sectionName === "forLoops"}
        {#if languageSelected === "python"}
            <HighlightSvelte code={"while i < 10:\n    print(i)\n    i += 1\n\nwhile True:\n    print(i)\n    i += 1\n    if i >= 10:\n        break\n\nfor i in range(10):\n    print(i)"} lang="python" />
        {:else if languageSelected === "php"}
            <HighlightSvelte code={"$i = 0;\nwhile ($i < 10) {\n    echo $i;\n    $i++;\n}\n\ndo {\n    echo $i;\n    $i++;\n} while ($i < 10);\n\nfor ($i = 0; $i < 10; $i++) {\n    echo $i;\n}"} lang="php" />
        {:else if languageSelected === "cpp"}
            <HighlightSvelte code={"int i = 0;\nwhile (i < 10) {\n    std::cout << i << std::endl;\n    i++;\n}\n\ndo {\n    std::cout << i << std::endl;\n    i++;\n} while (i < 10);\n\nfor (int i = 0; i < 10; i++) {\n    std::cout << i << std::endl;\n}"} lang="cpp" />
        {:else if languageSelected === "js"}
            <HighlightSvelte code={"let i = 0;\nwhile (i < 10) {\n    console.log(i);\n    i++;\n}\n\ndo {\n    console.log(i);\n    i++;\n} while (i < 10);\n\nfor (let i = 0; i < 10; i++) {\n    console.log(i);\n}"} lang="javascript" />
        {:else if languageSelected === "ts"}
            <HighlightSvelte code={"let i: number = 0;\nwhile (i < 10) {\n    console.log(i);\n    i++;\n}\n\ndo {\n    console.log(i);\n    i++;\n} while (i < 10);\n\nfor (let i: number = 0; i < 10; i++) {\n    console.log(i);\n}"} lang="typescript" />
        {:else if languageSelected === "java"}
            <HighlightSvelte code={"int i = 0;\nwhile (i < 10) {\n    System.out.println(i);\n    i++;\n}\n\ndo {\n    System.out.println(i);\n    i++;\n} while (i < 10);\n\nfor (int i = 0; i < 10; i++) {\n    System.out.println(i);\n}"} lang="java" />
        {:else if languageSelected === "cs"}
            <HighlightSvelte code={"int i = 0;\nwhile (i < 10) {\n    Console.WriteLine(i);\n    i++;\n}\n\ndo {\n    Console.WriteLine(i);\n    i++;\n} while (i < 10);\n\nfor (int i = 0; i < 10; i++) {\n    Console.WriteLine(i);\n}"} lang="csharp" />
        {:else if languageSelected === "go"}
            <HighlightSvelte code={"i := 0\nfor i < 10 {\n    fmt.Println(i)\n    i++\n}\n\nfor {\n    fmt.Println(i)\n    i++\n    if i >= 10 {\n        break\n    }\n}\n\nfor i := 0; i < 10; i++ {\n    fmt.Println(i)\n}"} lang="golang" />
        {:else if languageSelected === "ruby"}
            <HighlightSvelte code={"i = 0\nwhile i < 10\n    puts i\n    i += 1\nend\n\nbegin\n    puts i\n    i += 1\nend while i < 10\n\nfor i in 0..9\n    puts i\nend"} lang="ruby" />
        {/if}
    {:else if sectionName === "functions"}
        {#if languageSelected === "python"}
            <HighlightSvelte code={"def pow(x, n):\n    return x ** n\n\ndef printPow(x, n):\n    result = x ** n\n    print(result)\n\n# Test functions\nx = 2\nn = 3\nprint(f'{x}^3 = {pow(x, n)}')\nprintPow(x, n)"} lang="python" />
        {:else if languageSelected === "php"}
            <HighlightSvelte code={"function pow($x, $n) {\n    return $x ** $n;\n}\n\nfunction printPow($x, $n) {\n    $result = $x ** $n;\n    echo $result;\n}\n\n// Test functions\n$x = 2;\n$n = 3;\necho \"$x^3 = \" . pow($x, $n);\nprintPow($x, $n);"} lang="php" />
        {:else if languageSelected === "cpp"}
            <HighlightSvelte code={"#include <iostream>\n#include <cmath>\n\nint pow(int x, int n) {\n    return std::pow(x, n);\n}\n\nvoid printPow(int x, int n) {\n    int result = std::pow(x, n);\n    std::cout << result << std::endl;\n}\n\nint main() {\n    int x = 2;\n    int n = 3;\n    std::cout << x << \"^3 = \" << pow(x, n) << std::endl;\n    printPow(x, n);\n    return 0;\n}"} lang="cpp" />
        {:else if languageSelected === "js"}
            <HighlightSvelte code={"function pow(x, n) {\n    return Math.pow(x, n);\n}\n\nfunction printPow(x, n) {\n    const result = Math.pow(x, n);\n    console.log(result);\n}\n\n// Test functions\nconst x = 2;\nconst n = 3;\nconsole.log(`${x}^3 = ${pow(x, n)}`);\nprintPow(x, n);"} lang="javascript" />
        {:else if languageSelected === "ts"}
            <HighlightSvelte code={"function pow(x: number, n: number): number {\n    return Math.pow(x, n);\n}\n\nfunction printPow(x: number, n: number): void {\n    const result = Math.pow(x, n);\n    console.log(result);\n}\n\n// Test functions\nconst x: number = 2;\nconst n: number = 3;\nconsole.log(`${x}^3 = ${pow(x, n)}`);\nprintPow(x, n);"} lang="typescript" />
        {:else if languageSelected === "java"}
            <HighlightSvelte code={"public int pow(int x, int n) {\n    return (int) Math.pow(x, n);\n}\n\npublic void printPow(int x, int n) {\n    int result = (int) Math.pow(x, n);\n    System.out.println(result);\n}\n\n// Test functions\nint x = 2;\nint n = 3;\nSystem.out.println(x + \"^3 = \" + pow(x, n));\nprintPow(x, n);"} lang="java" />
        {:else if languageSelected === "cs"}
            <HighlightSvelte code={"public int Pow(int x, int n) {\n    return (int) Math.Pow(x, n);\n}\n\npublic void PrintPow(int x, int n) {\n    int result = (int) Math.Pow(x, n);\n    Console.WriteLine(result);\n}\n\n// Test functions\nint x = 2;\nint n = 3;\nConsole.WriteLine($\"{x}^3 = {Pow(x, n)}\");\nPrintPow(x, n);"} lang="csharp" />
        {:else if languageSelected === "go"}
            <HighlightSvelte code={"func pow(x int, n int) int {\n    return int(math.Pow(float64(x), float64(n)))\n}\n\nfunc printPow(x int, n int) {\n    result := int(math.Pow(float64(x), float64(n)))\n    fmt.Println(result)\n}\n\nfunc main() {\n    x := 2\n    n := 3\n    fmt.Printf(\"%d^3 = %d\\n\", x, pow(x, n))\n    printPow(x, n)\n}"} lang="golang" />
        {:else if languageSelected === "ruby"}
            <HighlightSvelte code={"def pow(x, n)\n    x ** n\nend\n\ndef printPow(x, n)\n    result = x ** n\n    puts result\nend\n\n# Test functions\nx = 2\nn = 3\nputs \"#{x}^3 = #{pow(x, n)}\"\nprintPow(x, n)"} lang="ruby" />
        {/if}
    {/if}


</pre>

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

    /* code {
        /* color: initial; 
        font-size: 1.5vw;
    } */

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


    /* div {
        background: rgb(28, 30, 28);
        padding: 2vw;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .center {
        display: flex;
        justify-content: center;
    } */

    @media only screen and (max-width: 600px) {
		:root {
            font-size: 12px;
        }

        button {
            font-size: 3vw;
        }
        /* code {
            font-size: 3vw;
        } */

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
