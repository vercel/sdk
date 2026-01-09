# GetAllLogDrainsResponseBody2

## Example Usage

```typescript
import { GetAllLogDrainsResponseBody2 } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsResponseBody2 = {
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

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `drains`                    | *models.ResponseBodyDrains* | :heavy_check_mark:          | N/A                         |