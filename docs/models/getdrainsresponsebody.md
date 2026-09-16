# GetDrainsResponseBody

## Example Usage

```typescript
import { GetDrainsResponseBody } from "@vercel/sdk/models/getdrainsop.js";

let value: GetDrainsResponseBody = {
  drains: [
    {
      createdAt: 639.21,
      delivery: {
        encoding: "proto",
        endpoint: {
          traces: "<value>",
        },
        headers: {},
        type: "otlphttp",
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
      updatedAt: 6031.42,
    },
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `drains`           | *models.Drains*    | :heavy_check_mark: | N/A                |