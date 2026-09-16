# GetSecurityFirewallConfigRulesetsSecurityConditions

## Example Usage

```typescript
import { GetSecurityFirewallConfigRulesetsSecurityConditions } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigRulesetsSecurityConditions = {
  op: "sub",
  type: "ja3_digest",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `neg`                                                                                                              | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `op`                                                                                                               | [models.GetSecurityFirewallConfigRulesetsSecurityOp](../models/getsecurityfirewallconfigrulesetssecurityop.md)     | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `type`                                                                                                             | [models.GetSecurityFirewallConfigRulesetsSecurityType](../models/getsecurityfirewallconfigrulesetssecuritytype.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `value`                                                                                                            | *models.GetSecurityFirewallConfigRulesetsSecurityValue*                                                            | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |