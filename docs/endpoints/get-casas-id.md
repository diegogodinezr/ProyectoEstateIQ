# Endpoint: `GET /casas/{id}`

Obtiene la información especifica de una casa.

## Parámetros de URL
- `{id}` (obligatorio): Identificador único de una casa que se desea recuperar.

## Ejemplo de Solicitud
```http
GET /casas/1
```

## Respuesta Exitosa (Código 200 OK)
```json
{"id_casa":1,"titulo":"Casa 1","descripcion":"Descripción de la casa 1","precio":"250000.00","ubicacion":"Ubicación 1","habitaciones":3,"baños":2,"id_usuario":1}
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
  sobre una casa en específico.