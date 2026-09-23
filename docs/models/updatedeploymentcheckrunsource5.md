# UpdateDeploymentCheckRunSource5

Project-defined CI requirement; its selection is frozen on each check run.

## Example Usage

```typescript
import { UpdateDeploymentCheckRunSource5 } from "@vercel/sdk/models/updatedeploymentcheckrunop.js";

let value: UpdateDeploymentCheckRunSource5 = {
  origin: "api",
  selection: {
    job: "Central Group Architect",
    kind: "task",
    task: "<value>",
  },
  subKind: "vercel-ci-check",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `origin`                                                                                                           | [models.UpdateDeploymentCheckRunSourceChecksV2Origin](../models/updatedeploymentcheckrunsourcechecksv2origin.md)   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `selection`                                                                                                        | *models.UpdateDeploymentCheckRunSourceSelection*                                                                   | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subKind`                                                                                                          | [models.UpdateDeploymentCheckRunSourceChecksV2SubKind](../models/updatedeploymentcheckrunsourcechecksv2subkind.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |