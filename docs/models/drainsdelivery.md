# DrainsDelivery


## Supported Types

### `models.GetDrainsDelivery1`

```typescript
const value: models.GetDrainsDelivery1 = {
  encoding: "json",
  endpoint: "<value>",
  headers: {
    "key": "<value>",
  },
  type: "http",
};
```

### `models.GetDrainsDelivery2`

```typescript
const value: models.GetDrainsDelivery2 = {
  encoding: "proto",
  endpoint: {
    traces: "<value>",
  },
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  type: "otlphttp",
};
```

### `models.GetDrainsDelivery3`

```typescript
const value: models.GetDrainsDelivery3 = {
  endpoint: "<value>",
  table: "<value>",
  type: "clickhouse",
};
```

### `models.GetDrainsDelivery4`

```typescript
const value: models.GetDrainsDelivery4 = {
  compression: "none",
  encoding: "json",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

### `models.GetDrainsDelivery5`

```typescript
const value: models.GetDrainsDelivery5 = {
  target: "vercel-otel-traces-db",
  type: "internal",
};
```

