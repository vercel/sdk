# GetDrainResponseBodyDelivery


## Supported Types

### `models.GetDrainDelivery1`

```typescript
const value: models.GetDrainDelivery1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "ndjson",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
};
```

### `models.GetDrainDelivery2`

```typescript
const value: models.GetDrainDelivery2 = {
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

### `models.GetDrainDelivery3`

```typescript
const value: models.GetDrainDelivery3 = {
  type: "syslog",
  endpoint: "<value>",
  secret: "<value>",
};
```

### `models.GetDrainDelivery4`

```typescript
const value: models.GetDrainDelivery4 = {
  type: "clickhouse",
  endpoint: "<value>",
  table: "<value>",
};
```

### `models.GetDrainDelivery5`

```typescript
const value: models.GetDrainDelivery5 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

