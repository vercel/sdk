# GetDrainsResponseBody

## Example Usage

```typescript
import { GetDrainsResponseBody } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsResponseBody = {
  drains: [
    {
      id: "<id>",
      createdAt: 639.21,
      updatedAt: 2576.2,
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

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `drains`           | *models.Drains*    | :heavy_check_mark: | N/A                |