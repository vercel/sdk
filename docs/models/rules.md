# Rules

## Example Usage

```typescript
import { Rules } from "@vercel/sdk/models/flag.js";

let value: Rules = {
  id: "<id>",
  outcome: {
    type: "rollout",
    base: {
      type: "entity",
      kind: "<value>",
      attribute: "<value>",
    },
    defaultVariantId: "<id>",
    startTimestamp: 5347.28,
    rollFromVariantId: "<id>",
    rollToVariantId: "<id>",
    slots: [],
  },
  conditions: [],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `outcome`                                      | *models.Outcome*                               | :heavy_check_mark:                             | N/A                                            |
| `conditions`                                   | [models.Conditions](../models/conditions.md)[] | :heavy_check_mark:                             | N/A                                            |