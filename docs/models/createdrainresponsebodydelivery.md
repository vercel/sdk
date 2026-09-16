# CreateDrainResponseBodyDelivery


## Supported Types

### `models.CreateDrainDeliveryDrains1`

```typescript
const value: models.CreateDrainDeliveryDrains1 = {
  encoding: "ndjson",
  endpoint: "<value>",
  headers: {},
  type: "http",
};
```

### `models.CreateDrainDeliveryDrains2`

```typescript
const value: models.CreateDrainDeliveryDrains2 = {
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

### `models.CreateDrainDeliveryDrains3`

```typescript
const value: models.CreateDrainDeliveryDrains3 = {
  endpoint: "<value>",
  table: "<value>",
  type: "clickhouse",
};
```

### `models.CreateDrainDelivery4`

```typescript
const value: models.CreateDrainDelivery4 = {
  compression: "none",
  encoding: "json",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

### `models.CreateDrainDelivery5`

```typescript
const value: models.CreateDrainDelivery5 = {
  target: "vercel-otel-traces-db",
  type: "internal",
};
```

