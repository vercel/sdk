# GetAllLogDrainsDrainsDelivery


## Supported Types

### `models.GetAllLogDrainsDeliveryLogDrains1`

```typescript
const value: models.GetAllLogDrainsDeliveryLogDrains1 = {
  encoding: "ndjson",
  endpoint: "<value>",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  type: "http",
};
```

### `models.GetAllLogDrainsDeliveryLogDrains2`

```typescript
const value: models.GetAllLogDrainsDeliveryLogDrains2 = {
  encoding: "json",
  endpoint: {
    traces: "<value>",
  },
  headers: {
    "key": "<value>",
  },
  type: "otlphttp",
};
```

### `models.GetAllLogDrainsDeliveryLogDrains3`

```typescript
const value: models.GetAllLogDrainsDeliveryLogDrains3 = {
  endpoint: "<value>",
  table: "<value>",
  type: "clickhouse",
};
```

### `models.GetAllLogDrainsDeliveryLogDrains4`

```typescript
const value: models.GetAllLogDrainsDeliveryLogDrains4 = {
  compression: "none",
  encoding: "json",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

### `models.GetAllLogDrainsDeliveryLogDrains5`

```typescript
const value: models.GetAllLogDrainsDeliveryLogDrains5 = {
  target: "vercel-otel-traces-db",
  type: "internal",
};
```

