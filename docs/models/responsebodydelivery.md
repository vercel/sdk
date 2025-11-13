# ResponseBodyDelivery


## Supported Types

### `models.CreateDrainDelivery1`

```typescript
const value: models.CreateDrainDelivery1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "ndjson",
  headers: {
    "key": "<value>",
  },
};
```

### `models.CreateDrainDelivery2`

```typescript
const value: models.CreateDrainDelivery2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "proto",
  headers: {},
};
```

### `models.Delivery3`

```typescript
const value: models.Delivery3 = {
  type: "clickhouse",
  endpoint: "<value>",
  table: "<value>",
};
```

### `models.Delivery4`

```typescript
const value: models.Delivery4 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

