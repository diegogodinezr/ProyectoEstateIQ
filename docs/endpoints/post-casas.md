# Endpoint: `POST /casas/`

Crea una nueva entrada para una casa con la información proporcionada.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `titulo` (obligatorio): Título de la casa.
- `descripcion` (opcional): Descripción detallada de la casa.
- `precio` (obligatorio): Precio de la casa.
- `ubicacion` (obligatorio): Ubicación de la casa.
- `habitaciones` (opcional): Número de habitaciones en la casa.
- `baños` (opcional): Número de baños en la casa.
- `id_usuario` (obligatorio): Identificador único del propietario de la casa.

**Ejemplo:**
```http
POST /casas/
Content-Type: application/json

{
  "titulo": "Casa Ejemplo",
  "descripcion": "Una descripción detallada de la casa.",
  "precio": 250000.00,
  "ubicacion": "Ubicación Ejemplo",
  "habitaciones": 3,
  "baños": 2,
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

- Ten en cuenta la estructura de la tabla de casas en la base de datos al interactuar con este endpoint. Asegúrate de proporcionar un id_usuario válido correspondiente al propietario de la casa.
- Asegúrate de proporcionar todos los parámetros requeridos para crear un nuevo usuario