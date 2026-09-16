# RulesetsRateLimit

## Example Usage

```typescript
import { RulesetsRateLimit } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: RulesetsRateLimit = {
  algo: "fixed_window",
  keys: [
    "<value 1>",
  ],
  limit: 1820.79,
  window: 7515.34,
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                               | [models.GetFirewallConfigRulesetsSecurityResponseAction](../models/getfirewallconfigrulesetssecurityresponseaction.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `algo`                                                                                                                 | [models.RulesetsAlgo](../models/rulesetsalgo.md)                                                                       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `keys`                                                                                                                 | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `limit`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `window`                                                                                                               | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |