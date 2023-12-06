# Endpoint: `GET /terrenos/{id}`

Obtiene la información de uno de los terrenos especificamente.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único del terreno que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /terrenos/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{"id_terreno":1,"titulo":"Terreno 1","descripcion":"Descripción del terreno 1","precio":"80000.00","ubicacion":"Ubicación 1","area":"1200.00","id_usuario":1}
```

## Respuestas de Errores Posibles
- Código 404 Not Found:

  ```json
  {"error":"Not found"}
  ```

- Código 500 Internal Server Error:
  ```json
  {
    "error": 500,
    "error": "internal_error",
    "error_description": "Ocurrió un problema para procesar la solicitud"
  }
  ``` 

## Notas Adicionales

- Asegurate de incluir un ID válido en la solicitud para obtener la información
  sobre un terreno en específico.