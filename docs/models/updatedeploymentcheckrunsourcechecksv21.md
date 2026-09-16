# UpdateDeploymentCheckRunSourceChecksV21

Config-driven CI task — check run `source` only (no parent check).

## Example Usage

```typescript
import { UpdateDeploymentCheckRunSourceChecksV21 } from "@vercel/sdk/models/updatedeploymentcheckrunop.js";

let value: UpdateDeploymentCheckRunSourceChecksV21 = {
  invocationId: "<id>",
  jobDefinitionId: "<id>",
  origin: "config",
  subKind: "vercel-ci",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `invocationAttempt`                                                                                                | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `invocationId`                                                                                                     | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `jobDefinitionId`                                                                                                  | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `origin`                                                                                                           | *"config"*                                                                                                         | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `subKind`                                                                                                          | [models.UpdateDeploymentCheckRunSourceChecksV2SubKind](../models/updatedeploymentcheckrunsourcechecksv2subkind.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |