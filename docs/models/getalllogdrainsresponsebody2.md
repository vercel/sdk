# GetAllLogDrainsResponseBody2

## Example Usage

```typescript
import { GetAllLogDrainsResponseBody2 } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsResponseBody2 = {
  drains: [
    {
      createdAt: 1914.38,
      delivery: {
        target: "vercel-otel-traces-db",
        type: "internal",
      },
      id: "<id>",
      name: "<value>",
      ownerId: "<id>",
      schemas: {},
      source: {
        integrationConfigurationId: "<id>",
        integrationId: "<id>",
        kind: "integration",
      },
      updatedAt: 49.22,
    },
  ],
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `drains`                    | *models.ResponseBodyDrains* | :heavy_check_mark:          | N/A                         |