# ListDeploymentCheckRunsSourceChecksV21

Config-driven CI task — check run `source` only (no parent check).

## Example Usage

```typescript
import { ListDeploymentCheckRunsSourceChecksV21 } from "@vercel/sdk/models/listdeploymentcheckrunsop.js";

let value: ListDeploymentCheckRunsSourceChecksV21 = {
  subKind: "vercel-ci",
  origin: "config",
  invocationId: "<id>",
  jobDefinitionId: "<id>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `subKind`                                                                                                      | *"vercel-ci"*                                                                                                  | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `origin`                                                                                                       | [models.ListDeploymentCheckRunsSourceChecksV2Origin](../models/listdeploymentcheckrunssourcechecksv2origin.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `invocationId`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `jobDefinitionId`                                                                                              | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |