# ListCheckRunsSelection4

## Example Usage

```typescript
import { ListCheckRunsSelection4 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: ListCheckRunsSelection4 = {
  filters: [
    "<value 1>",
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