# ListDeploymentCheckRunsSelection4

## Example Usage

```typescript
import { ListDeploymentCheckRunsSelection4 } from "@vercel/sdk/models/listdeploymentcheckrunsop.js";

let value: ListDeploymentCheckRunsSelection4 = {
  filters: [],
  job: "Turborepo",
  kind: "turborepo",
  task: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `failIfNoMatch`                                                                                | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `filters`                                                                                      | *string*[]                                                                                     | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `job`                                                                                          | [models.ListDeploymentCheckRunsSelectionJob](../models/listdeploymentcheckrunsselectionjob.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `kind`                                                                                         | *"turborepo"*                                                                                  | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `task`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |