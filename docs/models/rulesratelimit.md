# RulesRateLimit

## Example Usage

```typescript
import { RulesRateLimit } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: RulesRateLimit = {
  algo: "fixed_window",
  keys: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  limit: 8821.09,
  window: 6500.61,
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                                             | [models.GetFirewallConfigRulesSecurityResponse200ApplicationJSONAction](../models/getfirewallconfigrulessecurityresponse200applicationjsonaction.md) | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |
| `algo`                                                                                                                                               | [models.RulesAlgo](../models/rulesalgo.md)                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `keys`                                                                                                                                               | *string*[]                                                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `limit`                                                                                                                                              | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `window`                                                                                                                                             | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |