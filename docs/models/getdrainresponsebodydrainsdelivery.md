# GetDrainResponseBodyDrainsDelivery


## Supported Types

### `models.GetDrainDeliveryDrains1`

```typescript
const value: models.GetDrainDeliveryDrains1 = {
  encoding: "ndjson",
  endpoint: "<value>",
  headers: {
    "key": "<value>",
    "key1": "<value>",
  },
  type: "http",
};
```

### `models.GetDrainDeliveryDrains2`

```typescript
const value: models.GetDrainDeliveryDrains2 = {
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

### `models.GetDrainDeliveryDrains3`

```typescript
const value: models.GetDrainDeliveryDrains3 = {
  endpoint: "<value>",
  table: "<value>",
  type: "clickhouse",
};
```

### `models.GetDrainDeliveryDrains4`

```typescript
const value: models.GetDrainDeliveryDrains4 = {
  compression: "none",
  encoding: "json",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

### `models.GetDrainDeliveryDrains5`

```typescript
const value: models.GetDrainDeliveryDrains5 = {
  target: "vercel-otel-traces-db",
  type: "internal",
};
```

