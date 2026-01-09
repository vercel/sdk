# UpdateDrainResponseBody


## Supported Types

### `models.UpdateDrainResponseBody1`

```typescript
const value: models.UpdateDrainResponseBody1 = {
  id: "<id>",
  createdAt: 2996.75,
  updatedAt: 9500.11,
  name: "<value>",
  ownerId: "<id>",
  schemas: {},
  delivery: {
    type: "clickhouse",
    endpoint: "<value>",
    table: "<value>",
  },
  source: {
    kind: "integration",
    integrationId: "<id>",
    integrationConfigurationId: "<id>",
  },
};
```

### `models.UpdateDrainResponseBody2`

```typescript
const value: models.UpdateDrainResponseBody2 = {
  id: "<id>",
  createdAt: 7836.46,
  updatedAt: 3329.98,
  name: "<value>",
  ownerId: "<id>",
  schemas: {},
  delivery: {
    type: "internal",
    target: "vercel-otel-traces-db",
  },
  source: {
    kind: "integration",
    integrationId: "<id>",
    integrationConfigurationId: "<id>",
  },
};
```

