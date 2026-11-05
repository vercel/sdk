# AiGatewayRuleListItem

## Example Usage

```typescript
import { AiGatewayRuleListItem } from "@vercel/sdk/models/aigatewayrulelistitem.js";

let value: AiGatewayRuleListItem = {
  createdAt: 14.88,
  enabled: false,
  ownerId: "<id>",
  ruleId: "<id>",
  type: "rewrite",
  updatedAt: 6728.69,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `action`                                                                                        | [models.AiGatewayRuleListItemAction](../models/aigatewayrulelistitemaction.md)                  | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `createdAt`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `createdBy`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `deleted`                                                                                       | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `description`                                                                                   | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `enabled`                                                                                       | *boolean*                                                                                       | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `match`                                                                                         | [models.AiGatewayRuleListItemMatch](../models/aigatewayrulelistitemmatch.md)                    | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `ownerId`                                                                                       | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `ruleId`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `shadowedBy`                                                                                    | *string*                                                                                        | :heavy_minus_sign:                                                                              | Rule that takes precedence over this enabled rule for the same model, so this one never applies |
| `type`                                                                                          | [models.AiGatewayRuleListItemType](../models/aigatewayrulelistitemtype.md)                      | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `updatedAt`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |
| `updatedBy`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |