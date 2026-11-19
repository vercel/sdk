# UpdateAiGatewayRuleAction

Replaces the stored action. For a rewrite rule it must contain `rewriteModel`.

## Example Usage

```typescript
import { UpdateAiGatewayRuleAction } from "@vercel/sdk/models/updateaigatewayruleop.js";

let value: UpdateAiGatewayRuleAction = {};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rewriteModel`                                                                                                                                      | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | The model that serves the request, for a rewrite rule: a catalog model, or one of your virtual models as `vmc/<slug>`. It must exist and be active. |
| `reason`                                                                                                                                            | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | Why the model is denied, for a deny rule.                                                                                                           |