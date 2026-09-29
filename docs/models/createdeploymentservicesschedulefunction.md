# CreateDeploymentServicesScheduleFunction

Set when this build produces a function for schedule entrypoints.

## Example Usage

```typescript
import { CreateDeploymentServicesScheduleFunction } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentServicesScheduleFunction = {
  entrypoints: [
    {
      entrypoint: "<value>",
      scheduleNames: [
        "<value 1>",
        "<value 2>",
      ],
      sourceFile: "<value>",
    },
  ],
  outputPath: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `entrypoints`                                                                                    | [models.CreateDeploymentServicesEntrypoints](../models/createdeploymentservicesentrypoints.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `outputPath`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | Function output path every schedule in this build targets.                                       |