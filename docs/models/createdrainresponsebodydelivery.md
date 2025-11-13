# CreateDrainResponseBodyDelivery


## Supported Types

### `models.CreateDrainDeliveryDrains1`

```typescript
const value: models.CreateDrainDeliveryDrains1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "ndjson",
  headers: {},
};
```

### `models.CreateDrainDeliveryDrains2`

```typescript
const value: models.CreateDrainDeliveryDrains2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "json",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `models.CreateDrainDelivery3`

```typescript
const value: models.CreateDrainDelivery3 = {
  type: "clickhouse",
  endpoint: "<value>",
  table: "<value>",
};
```

### `models.CreateDrainDelivery4`

```typescript
const value: models.CreateDrainDelivery4 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

