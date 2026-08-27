# UpdateFirewallConfigRequestBodySecurityRequest12ConditionGroup

## Example Usage

```typescript
import { UpdateFirewallConfigRequestBodySecurityRequest12ConditionGroup } from "@vercel/sdk/models/updatefirewallconfigop.js";

let value: UpdateFirewallConfigRequestBodySecurityRequest12ConditionGroup = {
  conditions: [
    {
      type: "geo_continent",
      op: "sub",
    },
  ],
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `conditions`                                                                                                                                   | [models.UpdateFirewallConfigRequestBodySecurityRequest12Conditions](../models/updatefirewallconfigrequestbodysecurityrequest12conditions.md)[] | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |