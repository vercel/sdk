# GetDrainResponseBodyDelivery


## Supported Types

### `models.GetDrainDelivery1`

```typescript
const value: models.GetDrainDelivery1 = {
  encoding: "ndjson",
  endpoint: "<value>",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
  type: "http",
};
```

### `models.GetDrainDelivery2`

```typescript
const value: models.GetDrainDelivery2 = {
  encoding: "json",
  endpoint: {
    traces: "<value>",
  },
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
  type: "otlphttp",
};
```

### `models.GetDrainDelivery3`

```typescript
const value: models.GetDrainDelivery3 = {
  endpoint: "<value>",
  table: "<value>",
  type: "clickhouse",
};
```

### `models.GetDrainDelivery4`

```typescript
const value: models.GetDrainDelivery4 = {
  compression: "none",
  encoding: "ndjson",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

### `models.GetDrainDelivery5`

```typescript
const value: models.GetDrainDelivery5 = {
  target: "vercel-otel-traces-db",
  type: "internal",
};
```

