# ConfigurationPrice

The absolute price that replaces the plan item price, after any rate variant

## Example Usage

```typescript
import { ConfigurationPrice } from "@vercel/sdk/models/buycreditsop.js";

let value: ConfigurationPrice = {
  model: "unit",
  unitAmount: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `model`                                                               | [models.ConfigurationModel](../models/configurationmodel.md)          | :heavy_check_mark:                                                    | N/A                                                                   |
| `unitAmount`                                                          | *string*                                                              | :heavy_check_mark:                                                    | The non-negative per-unit USD amount, with at most two decimal places |