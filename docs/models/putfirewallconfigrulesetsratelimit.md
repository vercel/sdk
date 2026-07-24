# PutFirewallConfigRulesetsRateLimit

## Example Usage

```typescript
import { PutFirewallConfigRulesetsRateLimit } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesetsRateLimit = {
  algo: "token_bucket",
  window: 3596.48,
  limit: 1456.83,
  keys: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `algo`                                                                                                                                                     | [models.PutFirewallConfigRulesetsAlgo](../models/putfirewallconfigrulesetsalgo.md)                                                                         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `window`                                                                                                                                                   | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `limit`                                                                                                                                                    | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `keys`                                                                                                                                                     | *string*[]                                                                                                                                                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `action`                                                                                                                                                   | [models.PutFirewallConfigRulesetsSecurityResponse200ApplicationJSONAction](../models/putfirewallconfigrulesetssecurityresponse200applicationjsonaction.md) | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |