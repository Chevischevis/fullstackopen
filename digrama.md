# Diagrama: Crear nueva nota

```mermaid
sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser: Escribe una nota en el formulario
    user->>browser: Clic en botón "Save"

    Note right of browser: El formulario tiene método POST y action /new_note

    browser->>server: POST /new_note (note=texto de la nota)
    activate server

    Note right of server: El servidor agrega la nota al arreglo en memoria:
    Note right of server: notes.push({ content: req.body.note, date: new Date() })

    server-->>browser: 302 Redirect a /notes
    deactivate server

    browser->>server: GET /notes
    activate server
    server-->>browser: HTML actualizado
    deactivate server

    browser->>server: GET /main.css
    server-->>browser: CSS

    browser->>server: GET /main.js
    server-->>browser: JavaScript

    Note right of browser: JS se ejecuta y pide los datos de notas

    browser->>server: GET /data.json
    activate server
    server-->>browser: JSON con notas actualizadas
    deactivate server

    Note right of browser: El navegador ejecuta la función de renderizado y muestra la nueva nota
