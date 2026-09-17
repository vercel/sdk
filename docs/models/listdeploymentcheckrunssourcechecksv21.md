# ListDeploymentCheckRunsSourceChecksV21

Config-driven CI task — check run `source` only (no parent check).

## Example Usage

```typescript
import { ListDeploymentCheckRunsSourceChecksV21 } from "@vercel/sdk/models/listdeploymentcheckrunsop.js";

let value: ListDeploymentCheckRunsSourceChecksV21 = {
  invocationId: "<id>",
  jobDefinitionId: "<id>",
  origin: "config",
  subKind: "vercel-ci",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `invocationAttempt`                                                                                                              | *number*                                                                                                                         | :heavy_minus_sign:                                                                                                               | N/A                                                                                                                              |
| `invocationId`                                                                                                                   | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `jobDefinitionId`                                                                                                                | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `origin`                                                                                                                         | *"config"*                                                                                                                       | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `subKind`                                                                                                                        | [models.ListDeploymentCheckRunsSourceChecksV2ResponseSubKind](../models/listdeploymentcheckrunssourcechecksv2responsesubkind.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |