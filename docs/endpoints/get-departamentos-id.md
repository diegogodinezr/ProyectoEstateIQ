# Endpoint: `GET /departamentos/{id}`

Obtiene información detallada sobre un departamento en especifico.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del departamento que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /departamentos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{"id_departamento":1,"titulo":"Departamento 1","descripcion":"Descripción del departamento 1","precio":"180000.00","ubicacion":"Ubicación 1","habitaciones":2,"baños":1,"id_usuario":1}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {"error":"Not found"}
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
  sobre un departamento en específico.