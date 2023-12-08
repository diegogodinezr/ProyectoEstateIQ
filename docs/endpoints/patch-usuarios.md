# Endpoint: `PATCH /usuarios/{id}`

Actualiza la información de un usuario específico.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del usuario que se desea actualizar.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `nombre` (opcional): Nuevo nombre del usuario.
- `correo` (opcional): Nuevo correo electrónico del usuario.
- `contrasena` (opcional): Nueva contraseña del usuario.

**Ejemplo:**
```http
PATCH /usuarios/123
Content-Type: application/json

{
  "nombre": "Nuevo Nombre",
  "correo": "nuevo.correo@example.com",
  "contrasena": "nueva_contrasena_segura"
}

```
## Respuesta Exitosa (Código 200 OK)
```json
{
    "message": "Successfull partial update"
}
```

## Respuestas de Errores Posibles
- Código 400 Bad Request:

  ```json
    { "errno": 400, "error": "Bad Request" }
  ```

- Código 404 Not Found:

  ```json
  {"error":"Not found"}
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "error": 500,
    "error": "internal_error",
  }
  ``` 

## Notas Adicionales

- Asegúrate de proporcionar al menos un parámetro para actualizar la información del usuario.
- Asegúrate de utilizar un {id} válido en la URL para actualizar la información del usuario correspondiente.