# Endpoint: `POST /usuarios/`

Crea un nuevo usuario con la información proporcionada.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `nombre` (obligatorio): Nombre del usuario.
- `correo` (obligatorio): Correo electrónico del usuario.
- `contrasena` (obligatorio): Contraseña del usuario.

**Ejemplo:**
```http
POST /usuarios/
Content-Type: application/json

{
  "nombre": "Nuevo Usuario",
  "correo": "nuevo.usuario@example.com",
  "contrasena": "contrasena_segura"
}
```
## Respuesta Exitosa (Código 200 OK)
```json
{
    "status": 201,
    "message": "Created"
}
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

  ```json
    { "errno": 400, "error": "Bad Request" }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "error": 500,
    "error": "internal_error",
  }
  ``` 

## Notas Adicionales

- Asegúrate de proporcionar todos los parámetros requeridos para crear un nuevo usuario