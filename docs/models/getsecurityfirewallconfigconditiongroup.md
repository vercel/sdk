# GetSecurityFirewallConfigConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value: GetSecurityFirewallConfigConditionGroup = {
  conditions: [
    {
      type: "user_agent",
      op: "list",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                                                                                 | [models.GetSecurityFirewallConfigSecurityResponse200ApplicationJSONResponseBodyConditions](../models/getsecurityfirewallconfigsecurityresponse200applicationjsonresponsebodyconditions.md)[] | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |