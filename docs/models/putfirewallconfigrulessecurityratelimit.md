# PutFirewallConfigRulesSecurityRateLimit

## Example Usage

```typescript
import { PutFirewallConfigRulesSecurityRateLimit } from "@vercel/sdk/models/putfirewallconfigop.js";

let value: PutFirewallConfigRulesSecurityRateLimit = {
  algo: "token_bucket",
  window: 6471.24,
  limit: 9688.67,
  keys: [],
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `algo`                                                                                                                                               | [models.PutFirewallConfigRulesSecurityAlgo](../models/putfirewallconfigrulessecurityalgo.md)                                                         | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `window`                                                                                                                                             | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `limit`                                                                                                                                              | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `keys`                                                                                                                                               | *string*[]                                                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `action`                                                                                                                                             | [models.PutFirewallConfigRulesSecurityResponse200ApplicationJSONAction](../models/putfirewallconfigrulessecurityresponse200applicationjsonaction.md) | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |