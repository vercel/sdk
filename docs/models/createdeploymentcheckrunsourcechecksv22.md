# CreateDeploymentCheckRunSourceChecksV22

CI sentinel — check run `source` only (no parent check).

## Example Usage

```typescript
import { CreateDeploymentCheckRunSourceChecksV22 } from "@vercel/sdk/models/createdeploymentcheckrunop.js";

let value: CreateDeploymentCheckRunSourceChecksV22 = {
  subKind: "vercel-ci-sentinel",
  origin: "platform",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `subKind`                                                                                        | *"vercel-ci-sentinel"*                                                                           | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `origin`                                                                                         | [models.CreateDeploymentCheckRunSourceOrigin](../models/createdeploymentcheckrunsourceorigin.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |