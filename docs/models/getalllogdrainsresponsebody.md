# GetAllLogDrainsResponseBody


## Supported Types

### `models.GetAllLogDrainsResponseBody1`

```typescript
const value: models.GetAllLogDrainsResponseBody1 = {
  drains: [
    {
      id: "<id>",
      ownerId: "<id>",
      name: "<value>",
      createdAt: 5888.29,
      updatedAt: 3587.18,
      schemas: {},
      delivery: {
        type: "otlphttp",
        endpoint: {
          traces: "<value>",
        },
        encoding: "proto",
        headers: {
          "key": "<value>",
          "key1": "<value>",
        },
      },
      source: {
        kind: "integration",
        integrationId: "<id>",
        integrationConfigurationId: "<id>",
      },
    },
  ],
};
```

### `models.GetAllLogDrainsResponseBody2[]`

```typescript
const value: models.GetAllLogDrainsResponseBody2[] = [
  {
    createdFrom: "<value>",
  },
];
```

