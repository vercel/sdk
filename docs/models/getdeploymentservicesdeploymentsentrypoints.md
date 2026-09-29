# GetDeploymentServicesDeploymentsEntrypoints

## Example Usage

```typescript
import { GetDeploymentServicesDeploymentsEntrypoints } from "@vercel/sdk/models/getdeploymentservicesrouteprefixsource.js";

let value: GetDeploymentServicesDeploymentsEntrypoints = {
  entrypoint: "<value>",
  scheduleNames: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  sourceFile: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `entrypoint`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | Runtime-specific entrypoint locator from `vercel.json`.                   |
| `scheduleNames`                                                           | *string*[]                                                                | :heavy_check_mark:                                                        | Names of the schedules that dispatch to this entrypoint, in config order. |
| `sourceFile`                                                              | *string*                                                                  | :heavy_check_mark:                                                        | Project-relative source file that contains the entrypoint.                |