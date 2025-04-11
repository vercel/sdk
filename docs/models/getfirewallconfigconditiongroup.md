# GetFirewallConfigConditionGroup

## Example Usage

```typescript
import { GetFirewallConfigConditionGroup } from "@vercel/sdk/models/getfirewallconfigop.js";

let value: GetFirewallConfigConditionGroup = {
  conditions: [
    {
      type: "geo_as_number",
      op: "sub",
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `conditions`                                                                     | [models.GetFirewallConfigConditions](../models/getfirewallconfigconditions.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |