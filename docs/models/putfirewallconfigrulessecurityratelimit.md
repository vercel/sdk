# PutFirewallConfigRulesSecurityRateLimit

## Example Usage

```typescript
import { PutFirewallConfigRulesSecurityRateLimit } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesSecurityRateLimit = {
  algo: "token_bucket",
  keys: [
    "<value 1>",
    "<value 2>",
  ],
  limit: 9688.67,
  window: 2444.61,
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                             | [models.PutFirewallConfigRulesSecurityResponse200ApplicationJSONAction](../models/putfirewallconfigrulessecurityresponse200applicationjsonaction.md) | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `algo`                                                                                                                                               | [models.PutFirewallConfigRulesSecurityAlgo](../models/putfirewallconfigrulessecurityalgo.md)                                                         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `keys`                                                                                                                                               | *string*[]                                                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `limit`                                                                                                                                              | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `window`                                                                                                                                             | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |