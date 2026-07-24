# GetFirewallConfigRulesetsRateLimit

## Example Usage

```typescript
import { GetFirewallConfigRulesetsRateLimit } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesetsRateLimit = {
  algo: "token_bucket",
  window: 4817.97,
  limit: 4999.61,
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
| `algo`                                                                                                                                                     | [models.GetFirewallConfigRulesetsAlgo](../models/getfirewallconfigrulesetsalgo.md)                                                                         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `window`                                                                                                                                                   | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `limit`                                                                                                                                                    | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `keys`                                                                                                                                                     | *string*[]                                                                                                                                                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `action`                                                                                                                                                   | [models.GetFirewallConfigRulesetsSecurityResponse200ApplicationJSONAction](../models/getfirewallconfigrulesetssecurityresponse200applicationjsonaction.md) | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |