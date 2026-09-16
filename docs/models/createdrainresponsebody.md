# CreateDrainResponseBody


## Supported Types

### `models.CreateDrainResponseBody1`

```typescript
const value: models.CreateDrainResponseBody1 = {
  createdAt: 9104.12,
  delivery: {
    encoding: "ndjson",
    endpoint: "<value>",
    headers: {
      "key": "<value>",
      "key1": "<value>",
      "key2": "<value>",
    },
    type: "http",
  },
  id: "<id>",
  name: "<value>",
  ownerId: "<id>",
  schemas: {},
  source: {
    kind: "self-served",
  },
  updatedAt: 4140.09,
};
```

### `models.CreateDrainResponseBody2`

```typescript
const value: models.CreateDrainResponseBody2 = {
  createdAt: 8513.2,
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
  updatedAt: 6072.17,
};
```

