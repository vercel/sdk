# GetAllLogDrainsResponseBody


## Supported Types

### `models.GetAllLogDrainsResponseBody1[]`

```typescript
const value: models.GetAllLogDrainsResponseBody1[] = [];
```

### `models.GetAllLogDrainsResponseBody2`

```typescript
const value: models.GetAllLogDrainsResponseBody2 = {
  drains: [
    {
      id: "<id>",
      createdAt: 1914.38,
      updatedAt: 8765.47,
      name: "<value>",
      ownerId: "<id>",
      schemas: {},
      delivery: {
        type: "clickhouse",
        endpoint: "<value>",
        table: "<value>",
      },
      source: {
        kind: "self-served",
      },
    },
  ],
};
```

