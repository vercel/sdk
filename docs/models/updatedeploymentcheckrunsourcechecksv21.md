# UpdateDeploymentCheckRunSourceChecksV21

Config-driven CI task — check run `source` only (no parent check).

## Example Usage

```typescript
import { UpdateDeploymentCheckRunSourceChecksV21 } from "@vercel/sdk/models/updatedeploymentcheckrunop.js";

let value: UpdateDeploymentCheckRunSourceChecksV21 = {
  subKind: "vercel-ci",
  origin: "config",
  invocationId: "<id>",
  jobDefinitionId: "<id>",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `subKind`                                                                                                        | *"vercel-ci"*                                                                                                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `origin`                                                                                                         | [models.UpdateDeploymentCheckRunSourceChecksV2Origin](../models/updatedeploymentcheckrunsourcechecksv2origin.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `invocationId`                                                                                                   | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `jobDefinitionId`                                                                                                | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |