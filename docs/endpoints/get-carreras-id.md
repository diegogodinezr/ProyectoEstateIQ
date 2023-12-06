# Endpoint: `GET /carreras/{id}`

Permite obtener información detallada sobre una carrera especificada mediante su identificador único.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de la carrera que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /carreras/123
```

## Respuesta Exitosa (Código 200 OK)
```json
{
  "id_tema": 123,
  "nombre": "Nutrición",
}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {
    "errno": 404,
    "error": "not_found",
    "error_description": "No se encontró el tema."
  }
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "errno": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre una carrera en específico.