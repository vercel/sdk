# GetSecurityFirewallConfigSecurityConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigSecurityConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigsecurityresponsemanagedrules.js";

let value: GetSecurityFirewallConfigSecurityConditionGroup = {
  conditions: [
    {
      type: "path",
      op: "gt",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                                                         | [models.GetSecurityFirewallConfigSecurityResponse200ApplicationJSONConditions](../models/getsecurityfirewallconfigsecurityresponse200applicationjsonconditions.md)[] | :heavy_check_mark:                                                                                                                                                   | N/A                                                                                                                                                                  |