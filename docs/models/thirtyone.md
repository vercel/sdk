# ThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyOne } from "@vercel/sdk/models/userevent.js";

let value: ThirtyOne = {
  projectId: "<id>",
  aliasCount: 4499.67,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `aliasCount`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `deployment`                                               | [models.PayloadDeployment](../models/payloaddeployment.md) | :heavy_minus_sign:                                         | N/A                                                        |