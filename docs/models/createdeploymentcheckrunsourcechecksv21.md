# CreateDeploymentCheckRunSourceChecksV21

Config-driven CI task — check run `source` only (no parent check).

## Example Usage

```typescript
import { CreateDeploymentCheckRunSourceChecksV21 } from "@vercel/sdk/models/createdeploymentcheckrunop.js";

let value: CreateDeploymentCheckRunSourceChecksV21 = {
  subKind: "vercel-ci",
  origin: "config",
  invocationId: "<id>",
  jobDefinitionId: "<id>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `subKind`                                        | *"vercel-ci"*                                    | :heavy_check_mark:                               | N/A                                              |
| `origin`                                         | [models.SourceOrigin](../models/sourceorigin.md) | :heavy_check_mark:                               | N/A                                              |
| `invocationId`                                   | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `jobDefinitionId`                                | *string*                                         | :heavy_check_mark:                               | N/A                                              |