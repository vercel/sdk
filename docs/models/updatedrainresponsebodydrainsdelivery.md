# UpdateDrainResponseBodyDrainsDelivery


## Supported Types

### `models.UpdateDrainDeliveryDrainsResponse1`

```typescript
const value: models.UpdateDrainDeliveryDrainsResponse1 = {
  type: "http",
  endpoint: "<value>",
  encoding: "json",
  headers: {
    "key": "<value>",
  },
};
```

### `models.UpdateDrainDeliveryDrainsResponse2`

```typescript
const value: models.UpdateDrainDeliveryDrainsResponse2 = {
  type: "otlphttp",
  endpoint: {
    traces: "<value>",
  },
  encoding: "json",
  headers: {
    "key": "<value>",
  },
};
```

### `models.UpdateDrainDeliveryDrains3`

```typescript
const value: models.UpdateDrainDeliveryDrains3 = {
  type: "clickhouse",
  endpoint: "<value>",
  table: "<value>",
};
```

### `models.UpdateDrainDeliveryDrains4`

```typescript
const value: models.UpdateDrainDeliveryDrains4 = {
  type: "internal",
  target: "vercel-otel-traces-db",
};
```

