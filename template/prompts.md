# 1st Prompt: Manual

## Role:
Act like a Senior Software Developer specialized on HTML and JavaScript solutions for web development.

## Context:
I need to create a script for workflow with the next stucture on website:

1. On HTML directory (index.html), provide JavaScript (JS) (script.js) for input user (chain of text).
2. After user input, the website need to invert the chain of text.

## Languages: 
Only HTML and JS.

## Files:
HTML: index.html
JS: script.js

## Output: 
Provide the code of HTML and JS regarding the engages of requeriment.

# 2nd Prompt: Applying Prompt Engineering

## Rol: 
Ingeniero de solicitudes experto especializado en refinar, optimizar y mejorar cualquier prompt "input user" proporcionado.

## Contexto: 
Creación de prompt para solicitud HTML/JS para reverse string.

## Objetivo: 
Mejorar, maximizar la claridad y especificidad de la solicitud para asegurar precisos resultados al ser ingresada en algún LLM. Se busca entregues un nuevo prompt, mejorando el "input user" de acuerdo a las siguientes características:

1. Identifica qué información de contexto falta.
2. Añade criterios de calidad específicos.
3. Incluye ejemplos si son necesarios.
4. Adicionalmente, especifica qué variables necesita el usuario definir.

### Input User: entre comillas ("""...""")

"""
#Role:
Act like a Senior Software Developer specialized on HTML and JavaScript solutions for web development.

#Context:
I need to create a script for workflow with the next stucture on website:

1. On HTML directory (index.html), provide JavaScript (JS) (script.js) for input user (chain of text).
2. After user input, the website need to invert the chain of text.

##Languages: 
Only HTML and JS.

##Files:
HTML: index.html
JS: script.js

#Output: 
Provide the code of HTML and JS regarding the engages of requeriment.
"""

#Output:
- Genera un prompt en formato markdown de alta calidad, optimizado y mejorado, con formato Rol-Objetivo-Contexto-Salida.
- Procura que el Rol, el Objetivo, el Contexto y la Salida, sean enfocados técnicamente, disminuyendo la cantidad de tokens y mejorando la eficiencia del prompt.
- Aclara instrucciones vagas y corrige si es necesario.
- Agrega contexto y ejemplos si es necesario.
- Descompón tareas complejas en pasos claros y accionables.

Por otra parte, identifica posibles vacíos en la solicitud y mencionalos para garantizar la completitud del prompt.

# 3rd Prompt: Tuned Prompt Engineering

## **Role**

Senior Software Developer specialized in **vanilla HTML + JavaScript** for lightweight web utilities.

## **Objective**

Create a **minimal two-file web solution** (`index.html` + `script.js`) that **reverses a user-entered string** when the user presses the **OK button**.

## **Context**

* **Languages**: Only HTML + JavaScript (with minimal styling, no frameworks, no CSS libraries).
* **Files**:

  * `index.html` → contains markup with input + button.
  * `script.js` → contains all logic (no inline JS).
* **Behavior**:

  1. User types a string.
  2. When pressing **OK**, the script reverses the string and displays the result.
  3. **Input limitations**:

     * Only plain text, words, and numbers.
     * No emojis.
     * No empty input or whitespace-only input.
     * If the input isn't correct, so provide the user its respective errors.

  4. Minimal styling is acceptable (semantic and simple).
* **Focus**: Logic and correctness of processing, not UI or extra features.

## **Output**

Provide **complete code** for both/each files:

1. **index.html**

   * Input field and OK button.
   * Container for result (e.g., `<div id="result"></div>`).
   * External `script.js` linked with `defer`.

2. **script.js**

   * Function `reverseString(str)` using safe string handling (`Array.from`).
   * Logic triggered by clicking **OK** from user. 
   * Validation: reject empty/whitespace-only inputs and reject emojis.
   * Show reversed text in result container.

3. **Test Cases (in comments, not executed)**

   * Input: `hello123` → Output: `321olleh`
   * Input: `world` → Output: `dlrow`
