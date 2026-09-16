# Fallthrough3

## Example Usage

```typescript
import { Fallthrough3 } from "@vercel/sdk/models/flag.js";

let value: Fallthrough3 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [
    {
      durationMs: 5899.46,
      promille: 942.23,
    },
  ],
  startTimestamp: 3482.02,
  type: "rollout",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `base`                                                 | [models.FallthroughBase](../models/fallthroughbase.md) | :heavy_check_mark:                                     | N/A                                                    |
| `defaultVariantId`                                     | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `rollFromVariantId`                                    | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `rollToVariantId`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `slots`                                                | [models.Slots](../models/slots.md)[]                   | :heavy_check_mark:                                     | N/A                                                    |
| `startTimestamp`                                       | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `type`                                                 | *"rollout"*                                            | :heavy_check_mark:                                     | N/A                                                    |