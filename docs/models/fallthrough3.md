# Fallthrough3

## Example Usage

```typescript
import { Fallthrough3 } from "@vercel/sdk/models/flag.js";

let value: Fallthrough3 = {
  type: "rollout",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  defaultVariantId: "<id>",
  startTimestamp: 5899.25,
  rollFromVariantId: "<id>",
  rollToVariantId: "<id>",
  slots: [],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `type`                                                 | *"rollout"*                                            | :heavy_check_mark:                                     | N/A                                                    |
| `base`                                                 | [models.FallthroughBase](../models/fallthroughbase.md) | :heavy_check_mark:                                     | N/A                                                    |
| `defaultVariantId`                                     | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `startTimestamp`                                       | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `rollFromVariantId`                                    | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `rollToVariantId`                                      | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `slots`                                                | [models.Slots](../models/slots.md)[]                   | :heavy_check_mark:                                     | N/A                                                    |