# GetAllLogDrainsDrainsDelivery


## Supported Types

### `models.GetAllLogDrainsDeliveryLogDrains1`

```typescript
const value: models.GetAllLogDrainsDeliveryLogDrains1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "ndjson",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
};
```

### `models.GetAllLogDrainsDeliveryLogDrains2`

```typescript
const value: models.GetAllLogDrainsDeliveryLogDrains2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "json",
  headers: {
    "key": "<value>",
  },
};
```

### `models.GetAllLogDrainsDeliveryLogDrains3`

```typescript
const value: models.GetAllLogDrainsDeliveryLogDrains3 = {
  type: "clickhouse",
  endpoint: "<value>",
  table: "<value>",
};
```

### `models.GetAllLogDrainsDeliveryLogDrains4`

```typescript
const value: models.GetAllLogDrainsDeliveryLogDrains4 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

