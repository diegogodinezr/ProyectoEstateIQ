# Endpoint: `PATCH /terrenos/{id}`

Actualiza la información de un terreno específico.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del terreno que se desea actualizar.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `titulo` (opcional): Nuevo título del terreno.
- `descripcion` (opcional): Nueva descripción detallada del terreno.
- `precio` (opcional): Nuevo precio del terreno.
- `ubicacion` (opcional): Nueva ubicación del terreno.
- `area` (opcional): Nueva área del terreno en metros cuadrados.

**Ejemplo:**
```http
PATCH /terrenos/2
Content-Type: application/json

{
  "titulo": "Nuevo Título para el Terreno",
  "descripcion": "Nueva descripción detallada del terreno.",
  "precio": 80000.00,
  "ubicacion": "Nueva Ubicación del Terreno",
  "area": 600.00
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

- Asegúrate de proporcionar al menos un parámetro para actualizar la información del terreno.
- Asegúrate de utilizar un {id} válido en la URL para actualizar la información del terreno correspondiente.