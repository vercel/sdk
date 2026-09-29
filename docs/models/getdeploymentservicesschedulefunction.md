# GetDeploymentServicesScheduleFunction

Set when this build produces a function for schedule entrypoints.

## Example Usage

```typescript
import { GetDeploymentServicesScheduleFunction } from "@vercel/sdk/models/getdeploymentservicesrouteprefixsource.js";

let value: GetDeploymentServicesScheduleFunction = {
  entrypoints: [],
  outputPath: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `entrypoints`                                                                              | [models.GetDeploymentServicesEntrypoints](../models/getdeploymentservicesentrypoints.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `outputPath`                                                                               | *string*                                                                                   | :heavy_check_mark:                                                                         | Function output path every schedule in this build targets.                                 |