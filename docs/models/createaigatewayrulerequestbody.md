# CreateAiGatewayRuleRequestBody

## Example Usage

```typescript
import { CreateAiGatewayRuleRequestBody } from "@vercel/sdk/models/createaigatewayruleop.js";

let value: CreateAiGatewayRuleRequestBody = {
  type: "rewrite",
  match: {
    model: "Jetta",
  },
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `type`                                                                                | [models.CreateAiGatewayRuleType](../models/createaigatewayruletype.md)                | :heavy_check_mark:                                                                    | `rewrite` sends requests for the matched model to another model. `deny` rejects them. |
| `match`                                                                               | [models.CreateAiGatewayRuleMatch](../models/createaigatewayrulematch.md)              | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `action`                                                                              | [models.CreateAiGatewayRuleAction](../models/createaigatewayruleaction.md)            | :heavy_minus_sign:                                                                    | Required when `type` is `rewrite`.                                                    |
| `enabled`                                                                             | *boolean*                                                                             | :heavy_minus_sign:                                                                    | Whether the rule is enabled. Defaults to `true`.                                      |
| `description`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | A free-text note about the rule.                                                      |