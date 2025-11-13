# DrainsDelivery


## Supported Types

### `models.GetDrainsDelivery1`

```typescript
const value: models.GetDrainsDelivery1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "json",
  headers: {
    "key": "<value>",
  },
};
```

### `models.GetDrainsDelivery2`

```typescript
const value: models.GetDrainsDelivery2 = {
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

### `models.GetDrainsDelivery3`

```typescript
const value: models.GetDrainsDelivery3 = {
  type: "clickhouse",
  endpoint: "<value>",
  table: "<value>",
};
```

### `models.GetDrainsDelivery4`

```typescript
const value: models.GetDrainsDelivery4 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

