# GetDeploymentCheckRunSourceChecksV21

Config-driven CI task — check run `source` only (no parent check).

## Example Usage

```typescript
import { GetDeploymentCheckRunSourceChecksV21 } from "@vercel/sdk/models/getdeploymentcheckrunop.js";

let value: GetDeploymentCheckRunSourceChecksV21 = {
  invocationId: "<id>",
  jobDefinitionId: "<id>",
  origin: "config",
  subKind: "vercel-ci",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `invocationAttempt`                                                                                                          | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `invocationId`                                                                                                               | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `jobDefinitionId`                                                                                                            | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `origin`                                                                                                                     | *"config"*                                                                                                                   | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `subKind`                                                                                                                    | [models.GetDeploymentCheckRunSourceChecksV2ResponseSubKind](../models/getdeploymentcheckrunsourcechecksv2responsesubkind.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |