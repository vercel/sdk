# CreateDeploymentCheckRunSourceChecksV22

CI sentinel — check run `source` only (no parent check).

## Example Usage

```typescript
import { CreateDeploymentCheckRunSourceChecksV22 } from "@vercel/sdk/models/createdeploymentcheckrunop.js";

let value: CreateDeploymentCheckRunSourceChecksV22 = {
  origin: "platform",
  subKind: "vercel-ci-sentinel",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `origin`                                                                                           | *"platform"*                                                                                       | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `subKind`                                                                                          | [models.CreateDeploymentCheckRunSourceSubKind](../models/createdeploymentcheckrunsourcesubkind.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |