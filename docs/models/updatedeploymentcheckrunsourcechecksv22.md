# UpdateDeploymentCheckRunSourceChecksV22

CI sentinel — check run `source` only (no parent check).

## Example Usage

```typescript
import { UpdateDeploymentCheckRunSourceChecksV22 } from "@vercel/sdk/models/updatedeploymentcheckrunop.js";

let value: UpdateDeploymentCheckRunSourceChecksV22 = {
  subKind: "vercel-ci-sentinel",
  origin: "platform",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `subKind`                                                                                                                        | *"vercel-ci-sentinel"*                                                                                                           | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |
| `origin`                                                                                                                         | [models.UpdateDeploymentCheckRunSourceChecksV2ResponseOrigin](../models/updatedeploymentcheckrunsourcechecksv2responseorigin.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |