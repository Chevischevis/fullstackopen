sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Escribe una nueva nota
    user->>browser: Clic en botón "Save"

    Note right of browser: El navegador ejecuta una función JavaScript que obtiene el contenido del input

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: 302 Redirect a /notes
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML actualizado
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: CSS

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>browser: JavaScript

    Note right of browser: El navegador ejecuta el JS y solicita las notas actualizadas

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON con la lista de notas (incluyendo la nueva)
    deactivate server

    Note right of browser: El navegador renderiza la lista de notas
