# Outcome2

## Example Usage

```typescript
import { Outcome2 } from "@vercel/sdk/models/flag.js";

let value: Outcome2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 8936.73,
    "key1": 4237.14,
  },
  defaultVariantId: "<id>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `type`                                         | *"split"*                                      | :heavy_check_mark:                             | N/A                                            |
| `base`                                         | [models.OutcomeBase](../models/outcomebase.md) | :heavy_check_mark:                             | N/A                                            |
| `weights`                                      | Record<string, *number*>                       | :heavy_check_mark:                             | N/A                                            |
| `defaultVariantId`                             | *string*                                       | :heavy_check_mark:                             | N/A                                            |