# GetDrainsResponseBody

## Example Usage

```typescript
import { GetDrainsResponseBody } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsResponseBody = {
  drains: [
    {
      id: "<id>",
      ownerId: "<id>",
      name: "<value>",
      createdAt: 639.21,
      updatedAt: 2576.2,
      source: {
        kind: "integration",
        integrationId: "<id>",
        integrationConfigurationId: "<id>",
      },
    },
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `drains`           | *models.Drains*    | :heavy_check_mark: | N/A                |