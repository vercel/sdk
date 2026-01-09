# CreateDrainResponseBody


## Supported Types

### `models.CreateDrainResponseBody1`

```typescript
const value: models.CreateDrainResponseBody1 = {
  id: "<id>",
  createdAt: 9104.12,
  updatedAt: 815.09,
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

### `models.CreateDrainResponseBody2`

```typescript
const value: models.CreateDrainResponseBody2 = {
  id: "<id>",
  createdAt: 8513.2,
  updatedAt: 8458.35,
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

