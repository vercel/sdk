# CreateDeploymentServicesDeploymentsScheduleFunction

Set when this build produces a function for schedule entrypoints.

## Example Usage

```typescript
import { CreateDeploymentServicesDeploymentsScheduleFunction } from "@vercel/sdk/models/createdeploymenthasdeploymentsresponse2.js";

let value: CreateDeploymentServicesDeploymentsScheduleFunction = {
  entrypoints: [],
  outputPath: "<value>",
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `entrypoints`                                                                                                          | [models.CreateDeploymentServicesDeploymentsEntrypoints](../models/createdeploymentservicesdeploymentsentrypoints.md)[] | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `outputPath`                                                                                                           | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Function output path every schedule in this build targets.                                                             |