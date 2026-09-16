# UpdateDrainResponseBodyDelivery


## Supported Types

### `models.UpdateDrainDeliveryDrains1`

```typescript
const value: models.UpdateDrainDeliveryDrains1 = {
  encoding: "json",
  endpoint: "<value>",
  headers: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  type: "http",
};
```

### `models.UpdateDrainDeliveryDrains2`

```typescript
const value: models.UpdateDrainDeliveryDrains2 = {
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

### `models.UpdateDrainDeliveryDrains3`

```typescript
const value: models.UpdateDrainDeliveryDrains3 = {
  endpoint: "<value>",
  table: "<value>",
  type: "clickhouse",
};
```

### `models.UpdateDrainDelivery4`

```typescript
const value: models.UpdateDrainDelivery4 = {
  compression: "none",
  encoding: "json",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

### `models.UpdateDrainDelivery5`

```typescript
const value: models.UpdateDrainDelivery5 = {
  target: "vercel-otel-traces-db",
  type: "internal",
};
```

