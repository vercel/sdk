# AiGatewayRule

Public response shape for AI Gateway routing rules. Used so OpenAPI generation can avoid ElectroDB's recursive EntityItem types.

## Example Usage

```typescript
import { AiGatewayRule } from "@vercel/sdk/models/aigatewayrule.js";

let value: AiGatewayRule = {
  createdAt: 8934.9,
  enabled: false,
  ownerId: "<id>",
  ruleId: "<id>",
  type: "deny",
  updatedAt: 8231.57,
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `action`                             | [models.Action](../models/action.md) | :heavy_minus_sign:                   | N/A                                  |
| `createdAt`                          | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `createdBy`                          | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `deleted`                            | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |
| `description`                        | *string*                             | :heavy_minus_sign:                   | N/A                                  |
| `enabled`                            | *boolean*                            | :heavy_check_mark:                   | N/A                                  |
| `match`                              | [models.Match](../models/match.md)   | :heavy_minus_sign:                   | N/A                                  |
| `ownerId`                            | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `ruleId`                             | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `type`                               | [models.Type](../models/type.md)     | :heavy_check_mark:                   | N/A                                  |
| `updatedAt`                          | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `updatedBy`                          | *string*                             | :heavy_minus_sign:                   | N/A                                  |