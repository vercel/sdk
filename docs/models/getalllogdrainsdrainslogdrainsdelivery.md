# GetAllLogDrainsDrainsLogDrainsDelivery


## Supported Types

### `models.GetAllLogDrainsDelivery1`

```typescript
const value: models.GetAllLogDrainsDelivery1 = {
  encoding: "json",
  endpoint: "<value>",
  headers: {},
  type: "http",
};
```

### `models.GetAllLogDrainsDelivery2`

```typescript
const value: models.GetAllLogDrainsDelivery2 = {
  encoding: "proto",
  endpoint: {
    traces: "<value>",
  },
  headers: {},
  type: "otlphttp",
};
```

### `models.GetAllLogDrainsDelivery3`

```typescript
const value: models.GetAllLogDrainsDelivery3 = {
  endpoint: "<value>",
  table: "<value>",
  type: "clickhouse",
};
```

### `models.GetAllLogDrainsDelivery4`

```typescript
const value: models.GetAllLogDrainsDelivery4 = {
  compression: "none",
  encoding: "ndjson",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

### `models.GetAllLogDrainsDelivery5`

```typescript
const value: models.GetAllLogDrainsDelivery5 = {
  target: "vercel-otel-traces-db",
  type: "internal",
};
```

