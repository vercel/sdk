# UpdateDrainResponseBodyDrainsDelivery


## Supported Types

### `models.UpdateDrainDeliveryDrainsResponse1`

```typescript
const value: models.UpdateDrainDeliveryDrainsResponse1 = {
  encoding: "json",
  endpoint: "<value>",
  headers: {
    "key": "<value>",
  },
  type: "http",
};
```

### `models.UpdateDrainDeliveryDrainsResponse2`

```typescript
const value: models.UpdateDrainDeliveryDrainsResponse2 = {
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

### `models.UpdateDrainDeliveryDrainsResponse3`

```typescript
const value: models.UpdateDrainDeliveryDrainsResponse3 = {
  endpoint: "<value>",
  table: "<value>",
  type: "clickhouse",
};
```

### `models.UpdateDrainDeliveryDrains4`

```typescript
const value: models.UpdateDrainDeliveryDrains4 = {
  compression: "none",
  encoding: "json",
  endpoint: "<value>",
  fileStructure: "hive",
  region: "<value>",
  roleArn: "<value>",
  type: "s3",
};
```

### `models.UpdateDrainDeliveryDrains5`

```typescript
const value: models.UpdateDrainDeliveryDrains5 = {
  target: "vercel-otel-traces-db",
  type: "internal",
};
```

