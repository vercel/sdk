# GetFirewallConfigRulesRateLimit

## Example Usage

```typescript
import { GetFirewallConfigRulesRateLimit } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigRulesRateLimit = {
  algo: "fixed_window",
  window: 7563.17,
  limit: 18.26,
  keys: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `algo`                                                                                                                 | [models.GetFirewallConfigRulesAlgo](../models/getfirewallconfigrulesalgo.md)                                           | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `window`                                                                                                               | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `limit`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `keys`                                                                                                                 | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `action`                                                                                                               | [models.GetFirewallConfigRulesSecurityResponse200Action](../models/getfirewallconfigrulessecurityresponse200action.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |