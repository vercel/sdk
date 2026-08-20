# ThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyNine } from "@vercel/sdk/models/eighteen.js";

let value: ThirtyNine = {
  projectId: "<id>",
  aliasCount: 3862.91,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `aliasCount`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `deployment`                                               | [models.PayloadDeployment](../models/payloaddeployment.md) | :heavy_minus_sign:                                         | N/A                                                        |