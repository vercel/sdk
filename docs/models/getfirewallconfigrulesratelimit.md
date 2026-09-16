# GetFirewallConfigRulesRateLimit

## Example Usage

```typescript
import { GetFirewallConfigRulesRateLimit } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesRateLimit = {
  algo: "fixed_window",
  keys: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  limit: 18.26,
  window: 9872.11,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                               | [models.GetFirewallConfigRulesSecurityResponse200Action](../models/getfirewallconfigrulessecurityresponse200action.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `algo`                                                                                                                 | [models.GetFirewallConfigRulesAlgo](../models/getfirewallconfigrulesalgo.md)                                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `keys`                                                                                                                 | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `limit`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `window`                                                                                                               | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |