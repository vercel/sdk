# GetDeploymentServicesDeploymentsScheduleFunction

Set when this build produces a function for schedule entrypoints.

## Example Usage

```typescript
import { GetDeploymentServicesDeploymentsScheduleFunction } from "@vercel/sdk/models/getdeploymentservicesmiddlewareruntime.js";

let value: GetDeploymentServicesDeploymentsScheduleFunction = {
  entrypoints: [],
  outputPath: "<value>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `entrypoints`                                                                                                    | [models.GetDeploymentServicesDeploymentsEntrypoints](../models/getdeploymentservicesdeploymentsentrypoints.md)[] | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `outputPath`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Function output path every schedule in this build targets.                                                       |