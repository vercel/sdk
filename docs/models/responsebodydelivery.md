# ResponseBodyDelivery


## Supported Types

### `models.CreateDrainDelivery1`

```typescript
const value: models.CreateDrainDelivery1 = {
  encoding: "ndjson",
  endpoint: "<value>",
  headers: {
    "key": "<value>",
  },
  type: "http",
};
```

### `models.CreateDrainDelivery2`

```typescript
const value: models.CreateDrainDelivery2 = {
  encoding: "proto",
  endpoint: {
    traces: "<value>",
  },
  headers: {},
  type: "otlphttp",
};
```

### `models.CreateDrainDelivery3`

```typescript
const value: models.CreateDrainDelivery3 = {
  endpoint: "<value>",
  table: "<value>",
  type: "clickhouse",
};
```

### `models.Delivery4`

```typescript
const value: models.Delivery4 = {
  compression: "none",
  encoding: "ndjson",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

### `models.Delivery5`

```typescript
const value: models.Delivery5 = {
  target: "vercel-otel-traces-db",
  type: "internal",
};
```

