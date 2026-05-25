# GetDeploymentCheckRunSourceChecksV21

Config-driven CI task — check run `source` only (no parent check).

## Example Usage

```typescript
import { GetDeploymentCheckRunSourceChecksV21 } from "@vercel/sdk/models/getdeploymentcheckrunop.js";

let value: GetDeploymentCheckRunSourceChecksV21 = {
  subKind: "vercel-ci",
  origin: "config",
  invocationId: "<id>",
  jobDefinitionId: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `subKind`                                                                                                  | *"vercel-ci"*                                                                                              | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `origin`                                                                                                   | [models.GetDeploymentCheckRunSourceChecksV2Origin](../models/getdeploymentcheckrunsourcechecksv2origin.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `invocationId`                                                                                             | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `jobDefinitionId`                                                                                          | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |