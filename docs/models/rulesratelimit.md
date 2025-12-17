# RulesRateLimit

## Example Usage

```typescript
import { RulesRateLimit } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: RulesRateLimit = {
  algo: "fixed_window",
  window: 9645.75,
  limit: 8821.09,
  keys: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `algo`                                                                                                                                               | [models.RulesAlgo](../models/rulesalgo.md)                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `window`                                                                                                                                             | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `limit`                                                                                                                                              | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `keys`                                                                                                                                               | *string*[]                                                                                                                                           | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `action`                                                                                                                                             | [models.GetFirewallConfigRulesSecurityResponse200ApplicationJSONAction](../models/getfirewallconfigrulessecurityresponse200applicationjsonaction.md) | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |