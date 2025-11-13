# UpdateDrainResponseBodyDelivery


## Supported Types

### `models.UpdateDrainDeliveryDrains1`

```typescript
const value: models.UpdateDrainDeliveryDrains1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "json",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `models.UpdateDrainDeliveryDrains2`

```typescript
const value: models.UpdateDrainDeliveryDrains2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "proto",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `models.UpdateDrainDelivery3`

```typescript
const value: models.UpdateDrainDelivery3 = {
  type: "clickhouse",
  endpoint: "<value>",
  table: "<value>",
};
```

### `models.UpdateDrainDelivery4`

```typescript
const value: models.UpdateDrainDelivery4 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

