# GenerateFirewallRuleMitigate

## Example Usage

```typescript
import { GenerateFirewallRuleMitigate } from "@vercel/sdk/models/generatefirewallruleop.js";

let value: GenerateFirewallRuleMitigate = {
  action: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `action`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `rateLimit`                                                                        | [models.GenerateFirewallRuleRateLimit](../models/generatefirewallruleratelimit.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `redirect`                                                                         | [models.GenerateFirewallRuleRedirect](../models/generatefirewallruleredirect.md)   | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `actionDuration`                                                                   | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |