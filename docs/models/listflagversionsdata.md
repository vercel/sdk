# ListFlagVersionsData

## Example Usage

```typescript
import { ListFlagVersionsData } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsData = {
  variants: [
    {},
  ],
  environments: {},
  seed: 5467.94,
  state: "active",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `description`                                                                                    | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `maintainerIds`                                                                                  | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `permanent`                                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `tags`                                                                                           | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `experiment`                                                                                     | [models.ListFlagVersionsExperiment](../models/listflagversionsexperiment.md)                     | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `variants`                                                                                       | [models.ListFlagVersionsVariants](../models/listflagversionsvariants.md)[]                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `environments`                                                                                   | Record<string, [models.ListFlagVersionsEnvironments](../models/listflagversionsenvironments.md)> | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `seed`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `state`                                                                                          | [models.ListFlagVersionsState](../models/listflagversionsstate.md)                               | :heavy_check_mark:                                                                               | N/A                                                                                              |