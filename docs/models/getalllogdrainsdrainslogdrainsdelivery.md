# GetAllLogDrainsDrainsLogDrainsDelivery


## Supported Types

### `models.GetAllLogDrainsDelivery1`

```typescript
const value: models.GetAllLogDrainsDelivery1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "json",
  headers: {},
};
```

### `models.GetAllLogDrainsDelivery2`

```typescript
const value: models.GetAllLogDrainsDelivery2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "proto",
  headers: {},
};
```

### `models.GetAllLogDrainsDelivery3`

```typescript
const value: models.GetAllLogDrainsDelivery3 = {
  type: "clickhouse",
  endpoint: "<value>",
  table: "<value>",
};
```

### `models.GetAllLogDrainsDelivery4`

```typescript
const value: models.GetAllLogDrainsDelivery4 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

