# RulesetsRateLimit

## Example Usage

```typescript
import { RulesetsRateLimit } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: RulesetsRateLimit = {
  algo: "fixed_window",
  window: 4043.87,
  limit: 1820.79,
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
| `algo`                                                                                                                 | [models.RulesetsAlgo](../models/rulesetsalgo.md)                                                                       | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `window`                                                                                                               | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `limit`                                                                                                                | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `keys`                                                                                                                 | *string*[]                                                                                                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `action`                                                                                                               | [models.GetFirewallConfigRulesetsSecurityResponseAction](../models/getfirewallconfigrulesetssecurityresponseaction.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |