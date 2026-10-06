# UpdateDeploymentCheckRunSelection4

## Example Usage

```typescript
import { UpdateDeploymentCheckRunSelection4 } from "@vercel/sdk/models/updatedeploymentcheckrunop.js";

let value: UpdateDeploymentCheckRunSelection4 = {
  filters: [],
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
| `job`                                                                                            | [models.UpdateDeploymentCheckRunSelectionJob](../models/updatedeploymentcheckrunselectionjob.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `kind`                                                                                           | *"turborepo"*                                                                                    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `task`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |