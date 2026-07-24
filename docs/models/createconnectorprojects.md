# CreateConnectorProjects

Set by `?include=projects`. Capped at 100 per client.

## Example Usage

```typescript
import { CreateConnectorProjects } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorProjects = {
  items: [
    {
      clientId: "<id>",
      projectId: "<id>",
      environments: [
        "development",
      ],
      createdAt: 5233.87,
      updatedAt: 2954.52,
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `items`                                                            | [models.CreateConnectorItems](../models/createconnectoritems.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `hasMore`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `cursor`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |