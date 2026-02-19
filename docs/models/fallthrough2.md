# Fallthrough2

## Example Usage

```typescript
import { Fallthrough2 } from "@vercel/sdk/models/flag.js";

let value: Fallthrough2 = {
  type: "split",
  base: {
    type: "entity",
    kind: "<value>",
    attribute: "<value>",
  },
  weights: {
    "key": 863.6,
    "key1": 9268.36,
  },
  defaultVariantId: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `type`                           | *"split"*                        | :heavy_check_mark:               | N/A                              |
| `base`                           | [models.Base](../models/base.md) | :heavy_check_mark:               | N/A                              |
| `weights`                        | Record<string, *number*>         | :heavy_check_mark:               | N/A                              |
| `defaultVariantId`               | *string*                         | :heavy_check_mark:               | N/A                              |