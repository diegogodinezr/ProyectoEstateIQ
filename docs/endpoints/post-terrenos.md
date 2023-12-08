# Endpoint: `POST /terrenos/`

Crea un nuevo terreno con la información proporcionada.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `titulo` (obligatorio): Título del terreno.
- `descripcion` (opcional): Descripción detallada del terreno.
- `precio` (obligatorio): Precio del terreno.
- `ubicacion` (obligatorio): Ubicación del terreno.
- `area` (opcional): Área del terreno en metros cuadrados.
- `id_usuario` (obligatorio): Identificador único del propietario del terreno.

**Ejemplo:**
```http
POST /terrenos/
Content-Type: application/json

{
  "titulo": "Terreno Ejemplo",
  "descripcion": "Una descripción detallada del terreno.",
  "precio": 100000.00,
  "ubicacion": "Ubicación Ejemplo",
  "area": 500.00,
  "id_usuario": 123
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

- Ten en cuenta la estructura de la tabla de terrenos en la base de datos al interactuar con este endpoint. Asegúrate de proporcionar un id_usuario válido correspondiente al propietario del terreno.
- Asegúrate de proporcionar todos los parámetros requeridos para agregar un nuevo terreno