# Rules

## Example Usage

```typescript
import { Rules } from "@vercel/sdk/models/flag.js";

let value: Rules = {
  conditions: [
    {
      cmp: "contains",
      lhs: {
        attribute: "<value>",
        kind: "<value>",
        type: "entity",
      },
    },
  ],
  id: "<id>",
  outcome: {
    base: {
      attribute: "<value>",
      kind: "<value>",
      type: "entity",
    },
    defaultVariantId: "<id>",
    rollFromVariantId: "<id>",
    rollToVariantId: "<id>",
    slots: [],
    startTimestamp: 2235.64,
    type: "rollout",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `conditions`                                   | [models.Conditions](../models/conditions.md)[] | :heavy_check_mark:                             | N/A                                            |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `outcome`                                      | *models.FlagOutcome*                           | :heavy_check_mark:                             | N/A                                            |