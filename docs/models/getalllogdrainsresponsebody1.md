# GetAllLogDrainsResponseBody1

## Example Usage

```typescript
import { GetAllLogDrainsResponseBody1 } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsResponseBody1 = {
  drains: [
    {
      id: "<id>",
      ownerId: "<id>",
      name: "<value>",
      createdAt: 5888.29,
      updatedAt: 3587.18,
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