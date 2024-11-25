# Mitigate

## Example Usage

```typescript
import { Mitigate } from "@vercel/sdk/models/operations/putfirewallconfig.js";

let value: Mitigate = {
  action: "redirect",
};
```

## Fields

| Field                                                                                                                                                              | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `action`                                                                                                                                                           | [operations.PutFirewallConfigSecurityRequestRequestBodyRulesActionAction](../../models/operations/putfirewallconfigsecurityrequestrequestbodyrulesactionaction.md) | :heavy_check_mark:                                                                                                                                                 | N/A                                                                                                                                                                |
| `rateLimit`                                                                                                                                                        | *operations.RateLimit*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `redirect`                                                                                                                                                         | *operations.Redirect*                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |
| `actionDuration`                                                                                                                                                   | *string*                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                 | N/A                                                                                                                                                                |