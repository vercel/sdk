# PutFirewallConfigRulesetsRateLimit

## Example Usage

```typescript
import { PutFirewallConfigRulesetsRateLimit } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesetsRateLimit = {
  algo: "token_bucket",
  keys: [
    "<value 1>",
  ],
  limit: 1456.83,
  window: 9091.72,
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                                   | [models.PutFirewallConfigRulesetsSecurityResponse200ApplicationJSONAction](../models/putfirewallconfigrulesetssecurityresponse200applicationjsonaction.md) | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |
| `algo`                                                                                                                                                     | [models.PutFirewallConfigRulesetsAlgo](../models/putfirewallconfigrulesetsalgo.md)                                                                         | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `keys`                                                                                                                                                     | *string*[]                                                                                                                                                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `limit`                                                                                                                                                    | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `window`                                                                                                                                                   | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |