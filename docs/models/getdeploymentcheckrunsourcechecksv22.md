# GetDeploymentCheckRunSourceChecksV22

CI sentinel — check run `source` only (no parent check).

## Example Usage

```typescript
import { GetDeploymentCheckRunSourceChecksV22 } from "@vercel/sdk/models/getdeploymentcheckrunop.js";

let value: GetDeploymentCheckRunSourceChecksV22 = {
  subKind: "vercel-ci-sentinel",
  origin: "platform",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `subKind`                                                                                                                  | *"vercel-ci-sentinel"*                                                                                                     | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `origin`                                                                                                                   | [models.GetDeploymentCheckRunSourceChecksV2ResponseOrigin](../models/getdeploymentcheckrunsourcechecksv2responseorigin.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |