# UpdateDrainResponseBody


## Supported Types

### `models.UpdateDrainResponseBody1`

```typescript
const value: models.UpdateDrainResponseBody1 = {
  createdAt: 2996.75,
  delivery: {
    target: "vercel-otel-traces-db",
    type: "internal",
  },
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  schemas: {},
  source: {
    integrationConfigurationId: "<id>",
    integrationId: "<id>",
    kind: "integration",
  },
  updatedAt: 7692.12,
};
```

### `models.UpdateDrainResponseBody2`

```typescript
const value: models.UpdateDrainResponseBody2 = {
  createdAt: 7836.46,
  delivery: {
    encoding: "proto",
    endpoint: {
      traces: "<value>",
    },
    headers: {
      "key": "<value>",
      "key1": "<value>",
    },
    type: "otlphttp",
  },
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  schemas: {},
  source: {
    kind: "self-served",
  },
  updatedAt: 7610.88,
};
```

