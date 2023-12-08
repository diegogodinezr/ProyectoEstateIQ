# Endpoint: `POST /departamentos/`

Crea un nuevo departamento con la información proporcionada.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `titulo` (obligatorio): Título del departamento.
- `descripcion` (opcional): Descripción detallada del departamento.
- `precio` (obligatorio): Precio del departamento.
- `ubicacion` (obligatorio): Ubicación del departamento.
- `habitaciones` (opcional): Número de habitaciones en el departamento.
- `baños` (opcional): Número de baños en el departamento.
- `id_usuario` (obligatorio): Identificador único del propietario del departamento.

**Ejemplo:**
```http
POST /departamentos/
Content-Type: application/json

{
  "titulo": "Departamento Ejemplo",
  "descripcion": "Una descripción detallada del departamento.",
  "precio": 150000.00,
  "ubicacion": "Ubicación Ejemplo",
  "habitaciones": 2,
  "baños": 1,
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

- Ten en cuenta la estructura de la tabla de departamentos en la base de datos al interactuar con este endpoint. Asegúrate de proporcionar un id_usuario válido correspondiente al propietario del departamento.
- Asegúrate de proporcionar todos los parámetros requeridos para agregar un nuevo terreno