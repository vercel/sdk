# ListFlagVersionsRules

## Example Usage

```typescript
import { ListFlagVersionsRules } from "@vercel/sdk/models/listflagversionsop.js";

let value: ListFlagVersionsRules = {
  conditions: [],
  id: "<id>",
  outcome: {
    type: "experiment",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `conditions`                                                                   | [models.ListFlagVersionsConditions](../models/listflagversionsconditions.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `outcome`                                                                      | *models.ListFlagVersionsOutcome*                                               | :heavy_check_mark:                                                             | N/A                                                                            |