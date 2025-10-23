# GetDrainsDrainsDelivery


## Supported Types

### `models.GetDrainsDeliveryDrains1`

```typescript
const value: models.GetDrainsDeliveryDrains1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "json",
  headers: {},
};
```

### `models.GetDrainsDeliveryDrains2`

```typescript
const value: models.GetDrainsDeliveryDrains2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "json",
  headers: {},
};
```

### `models.GetDrainsDeliveryDrains3`

```typescript
const value: models.GetDrainsDeliveryDrains3 = {
  type: "syslog",
  endpoint: "<value>",
  secret: "<value>",
};
```

### `models.GetDrainsDeliveryDrains4`

```typescript
const value: models.GetDrainsDeliveryDrains4 = {
  type: "clickhouse",
  endpoint: "<value>",
  table: "<value>",
};
```

### `models.GetDrainsDeliveryDrains5`

```typescript
const value: models.GetDrainsDeliveryDrains5 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

