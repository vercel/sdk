# GetDrainsDrainsDelivery


## Supported Types

### `models.GetDrainsDeliveryDrains1`

```typescript
const value: models.GetDrainsDeliveryDrains1 = {
  encoding: "json",
  endpoint: "<value>",
  headers: {},
  type: "http",
};
```

### `models.GetDrainsDeliveryDrains2`

```typescript
const value: models.GetDrainsDeliveryDrains2 = {
  encoding: "json",
  endpoint: {
    traces: "<value>",
  },
  headers: {},
  type: "otlphttp",
};
```

### `models.GetDrainsDeliveryDrains3`

```typescript
const value: models.GetDrainsDeliveryDrains3 = {
  endpoint: "<value>",
  table: "<value>",
  type: "clickhouse",
};
```

### `models.GetDrainsDeliveryDrains4`

```typescript
const value: models.GetDrainsDeliveryDrains4 = {
  compression: "none",
  encoding: "ndjson",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

### `models.GetDrainsDeliveryDrains5`

```typescript
const value: models.GetDrainsDeliveryDrains5 = {
  target: "vercel-otel-traces-db",
  type: "internal",
};
```

