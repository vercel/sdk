# UpdateAiGatewayRuleRequestBody

## Example Usage

```typescript
import { UpdateAiGatewayRuleRequestBody } from "@vercel/sdk/models/updateaigatewayruleop.js";

let value: UpdateAiGatewayRuleRequestBody = {
  ruleId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `ruleId`                                                                                          | *string*                                                                                          | :heavy_check_mark:                                                                                | The ID of the rule to update. Send at least one of `enabled`, `description`, or `action` with it. |
| `enabled`                                                                                         | *boolean*                                                                                         | :heavy_minus_sign:                                                                                | Whether the rule is enabled.                                                                      |
| `description`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | A free-text note about the rule.                                                                  |
| `action`                                                                                          | [models.UpdateAiGatewayRuleAction](../models/updateaigatewayruleaction.md)                        | :heavy_minus_sign:                                                                                | Replaces the stored action. For a rewrite rule it must contain `rewriteModel`.                    |