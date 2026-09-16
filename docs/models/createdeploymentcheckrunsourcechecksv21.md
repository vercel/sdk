# CreateDeploymentCheckRunSourceChecksV21

Config-driven CI task — check run `source` only (no parent check).

## Example Usage

```typescript
import { CreateDeploymentCheckRunSourceChecksV21 } from "@vercel/sdk/models/createdeploymentcheckrunop.js";

let value: CreateDeploymentCheckRunSourceChecksV21 = {
  invocationId: "<id>",
  jobDefinitionId: "<id>",
  origin: "config",
  subKind: "vercel-ci",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `invocationAttempt`                                | *number*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `invocationId`                                     | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `jobDefinitionId`                                  | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `origin`                                           | *"config"*                                         | :heavy_check_mark:                                 | N/A                                                |
| `subKind`                                          | [models.SourceSubKind](../models/sourcesubkind.md) | :heavy_check_mark:                                 | N/A                                                |