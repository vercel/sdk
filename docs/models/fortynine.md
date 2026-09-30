# FortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyNine } from "@vercel/sdk/models/via3.js";

let value: FortyNine = {
  aliasCount: 8401.55,
  projectId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `aliasCount`                                               | *number*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `deployment`                                               | [models.PayloadDeployment](../models/payloaddeployment.md) | :heavy_minus_sign:                                         | N/A                                                        |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |