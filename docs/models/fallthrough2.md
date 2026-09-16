# Fallthrough2

## Example Usage

```typescript
import { Fallthrough2 } from "@vercel/sdk/models/flag.js";

let value: Fallthrough2 = {
  base: {
    attribute: "<value>",
    kind: "<value>",
    type: "entity",
  },
  defaultVariantId: "<id>",
  type: "split",
  weights: {
    "key": 863.6,
    "key1": 9268.36,
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `base`                           | [models.Base](../models/base.md) | :heavy_check_mark:               | N/A                              |
| `defaultVariantId`               | *string*                         | :heavy_check_mark:               | N/A                              |
| `type`                           | *"split"*                        | :heavy_check_mark:               | N/A                              |
| `weights`                        | Record<string, *number*>         | :heavy_check_mark:               | N/A                              |