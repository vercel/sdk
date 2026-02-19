# Environments

## Example Usage

```typescript
import { Environments } from "@vercel/sdk/models/flag.js";

let value: Environments = {
  pausedOutcome: {
    type: "variant",
    variantId: "<id>",
  },
  fallthrough: {
    type: "variant",
    variantId: "<id>",
  },
  active: true,
  rules: [],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `reuse`                                                                                  | [models.Reuse](../models/reuse.md)                                                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `targets`                                                                                | Record<string, Record<string, Record<string, [models.Targets](../models/targets.md)[]>>> | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `revision`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `pausedOutcome`                                                                          | [models.PausedOutcome](../models/pausedoutcome.md)                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `fallthrough`                                                                            | *models.Fallthrough*                                                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `active`                                                                                 | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `rules`                                                                                  | [models.Rules](../models/rules.md)[]                                                     | :heavy_check_mark:                                                                       | N/A                                                                                      |