# Endpoint: `PATCH /departamentos/{id}`

Actualiza la información de un departamento específico.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del departamento que se desea actualizar.

## Parámetros de Solicitud

El cuerpo de la solicitud debe contener un objeto JSON con la siguiente estructura:

- `titulo` (opcional): Nuevo título del departamento.
- `descripcion` (opcional): Nueva descripción detallada del departamento.
- `precio` (opcional): Nuevo precio del departamento.
- `ubicacion` (opcional): Nueva ubicación del departamento.
- `habitaciones` (opcional): Nuevo número de habitaciones en el departamento.
- `baños` (opcional): Nuevo número de baños en el departamento.

**Ejemplo:**
```http
PATCH /departamentos/3
Content-Type: application/json

{
  "titulo": "Nuevo Título para el Departamento",
  "descripcion": "Nueva descripción detallada del departamento.",
  "precio": 120000.00,
  "ubicacion": "Nueva Ubicación del Departamento",
  "habitaciones": 2,
  "baños": 1
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

- Asegúrate de proporcionar al menos un parámetro para actualizar la información del departamento.
- Asegúrate de utilizar un {id} válido en la URL para actualizar la información del departamento correspondiente.