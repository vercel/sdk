# GetSecurityFirewallConfigConditionGroup

## Example Usage

```typescript
import { GetSecurityFirewallConfigConditionGroup } from "@vercel/sdk/models/getsecurityfirewallconfigrulessecurityresponse200applicationjsonresponsebodydraft2actionaction.js";

let value: GetSecurityFirewallConfigConditionGroup = {
  conditions: [
    {
      op: "suf",
      type: "geo_country_region",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                        | Type                                                                                                                                                                                         | Required                                                                                                                                                                                     | Description                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                                                                                 | [models.GetSecurityFirewallConfigSecurityResponse200ApplicationJSONResponseBodyConditions](../models/getsecurityfirewallconfigsecurityresponse200applicationjsonresponsebodyconditions.md)[] | :heavy_check_mark:                                                                                                                                                                           | N/A                                                                                                                                                                                          |