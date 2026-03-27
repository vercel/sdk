# Configuration2

The configuration for a credit purchase

## Example Usage

```typescript
import { Configuration2 } from "@vercel/sdk/models/buycreditsop.js";

let value: Configuration2 = {
  options: {
    items: [],
    orderId: "<id>",
  },
  output: "<value>",
  type: "domain_name",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `options`                                                        | [models.ConfigurationOptions](../models/configurationoptions.md) | :heavy_check_mark:                                               | N/A                                                              |
| `output`                                                         | *any*                                                            | :heavy_check_mark:                                               | N/A                                                              |
| `type`                                                           | *"domain_name"*                                                  | :heavy_check_mark:                                               | N/A                                                              |