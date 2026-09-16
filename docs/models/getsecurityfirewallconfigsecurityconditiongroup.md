# GetSecurityFirewallConfigSecurityConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigrulesetssecurityresponse200action.js";

let value: GetSecurityFirewallConfigSecurityConditionGroup = {
  conditions: [
    {
      op: "neq",
      type: "environment",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                                                         | [models.GetSecurityFirewallConfigSecurityResponse200ApplicationJSONConditions](../models/getsecurityfirewallconfigsecurityresponse200applicationjsonconditions.md)[] | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |