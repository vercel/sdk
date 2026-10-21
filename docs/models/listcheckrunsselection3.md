# ListCheckRunsSelection3

## Example Usage

```typescript
import { ListCheckRunsSelection3 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: ListCheckRunsSelection3 = {
  filters: [
    "<value 1>",
    "<value 2>",
  ],
  job: "Turborepo",
  kind: "turborepo",
  task: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `failIfNoMatch`                                                            | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `filters`                                                                  | *string*[]                                                                 | :heavy_check_mark:                                                         | N/A                                                                        |
| `job`                                                                      | [models.ListCheckRunsSelectionJob](../models/listcheckrunsselectionjob.md) | :heavy_check_mark:                                                         | N/A                                                                        |
| `kind`                                                                     | *"turborepo"*                                                              | :heavy_check_mark:                                                         | N/A                                                                        |
| `task`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |