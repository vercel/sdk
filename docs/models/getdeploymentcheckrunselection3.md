# GetDeploymentCheckRunSelection3

## Example Usage

```typescript
import { GetDeploymentCheckRunSelection3 } from "@vercel/sdk/models/getdeploymentcheckrunop.js";

let value: GetDeploymentCheckRunSelection3 = {
  filters: [],
  job: "Turborepo",
  kind: "turborepo",
  task: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `failIfNoMatch`                                  | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `filters`                                        | *string*[]                                       | :heavy_check_mark:                               | N/A                                              |
| `job`                                            | [models.SelectionJob](../models/selectionjob.md) | :heavy_check_mark:                               | N/A                                              |
| `kind`                                           | *"turborepo"*                                    | :heavy_check_mark:                               | N/A                                              |
| `task`                                           | *string*                                         | :heavy_check_mark:                               | N/A                                              |