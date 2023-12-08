# Endpoint: `PATCH /casas/{id}`

Actualiza la información de una casa específica.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la casa que se desea actualizar.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `titulo` (opcional): Nuevo título de la casa.
- `descripcion` (opcional): Nueva descripción detallada de la casa.
- `precio` (opcional): Nuevo precio de la casa.
- `ubicacion` (opcional): Nueva ubicación de la casa.
- `habitaciones` (opcional): Nuevo número de habitaciones en la casa.
- `baños` (opcional): Nuevo número de baños en la casa.

**Ejemplo:**
```http
PATCH /casas/1
Content-Type: application/json

{
  "titulo": "Nuevo Título",
  "descripcion": "Nueva descripción detallada de la casa.",
  "precio": 280000.00,
  "ubicacion": "Nueva Ubicación",
  "habitaciones": 4,
  "baños": 3
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

- Asegúrate de proporcionar al menos un parámetro para actualizar la información de la casa.
- Asegúrate de utilizar un {id} válido en la URL para actualizar la información de la casa correspondiente.