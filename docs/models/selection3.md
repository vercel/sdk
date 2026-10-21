# Selection3

## Example Usage

```typescript
import { Selection3 } from "@vercel/sdk/models/createdeploymentcheckrunop.js";

let value: Selection3 = {
  filters: [
    "<value 1>",
  ],
  job: "Turborepo",
  kind: "turborepo",
  task: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `failIfNoMatch`                                                                                  | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `filters`                                                                                        | *string*[]                                                                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `job`                                                                                            | [models.CreateDeploymentCheckRunSelectionJob](../models/createdeploymentcheckrunselectionjob.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `kind`                                                                                           | *"turborepo"*                                                                                    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `task`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |