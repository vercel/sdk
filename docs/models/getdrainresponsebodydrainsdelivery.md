# GetDrainResponseBodyDrainsDelivery


## Supported Types

### `models.GetDrainDeliveryDrains1`

```typescript
const value: models.GetDrainDeliveryDrains1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "ndjson",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `models.GetDrainDeliveryDrains2`

```typescript
const value: models.GetDrainDeliveryDrains2 = {
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

### `models.GetDrainDeliveryDrains3`

```typescript
const value: models.GetDrainDeliveryDrains3 = {
  type: "syslog",
  endpoint: "<value>",
  secret: "<value>",
};
```

### `models.GetDrainDeliveryDrains4`

```typescript
const value: models.GetDrainDeliveryDrains4 = {
  type: "clickhouse",
  endpoint: "<value>",
  table: "<value>",
};
```

### `models.GetDrainDeliveryDrains5`

```typescript
const value: models.GetDrainDeliveryDrains5 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

