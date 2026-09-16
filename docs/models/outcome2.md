# Outcome2

## Example Usage

```typescript
import { Outcome2 } from "@vercel/sdk/models/flag.js";

let value: Outcome2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 8936.73,
    "key1": 4237.14,
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `base`                                         | [models.OutcomeBase](../models/outcomebase.md) | :heavy_check_mark:                             | N/A                                            |
| `defaultVariantId`                             | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `type`                                         | *"split"*                                      | :heavy_check_mark:                             | N/A                                            |
| `weights`                                      | Record<string, *number*>                       | :heavy_check_mark:                             | N/A                                            |