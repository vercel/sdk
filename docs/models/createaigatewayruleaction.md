# CreateAiGatewayRuleAction

Required when `type` is `rewrite`.

## Example Usage

```typescript
import { CreateAiGatewayRuleAction } from "@vercel/sdk/models/createaigatewayruleop.js";

let value: CreateAiGatewayRuleAction = {};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `rewriteModel`                                                                                                                                                     | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | The model that serves the request: a catalog model, or one of your virtual models as `vmc/<slug>`. It must exist and be active. Required when `type` is `rewrite`. |
| `reason`                                                                                                                                                           | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | Why the model is denied. Used when `type` is `deny`.                                                                                                               |