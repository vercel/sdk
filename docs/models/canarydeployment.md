# CanaryDeployment

The canary deployment being rolled out

## Example Usage

```typescript
import { CanaryDeployment } from "@vercel/sdk/models/getrollingreleaseop.js";

let value: CanaryDeployment = {
  id: "dpl_def456",
  name: "my-shop@9c7e2f4",
  url: "9c7e2f4-my-shop.vercel.app",
  target: "production",
  source: "git",
  createdAt: 1716210100000,
  readyState: "READY",
  readyStateAt: 1716210400000,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `name`                                                                                                     | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `url`                                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `target`                                                                                                   | [models.GetRollingReleaseRollingReleaseTarget](../models/getrollingreleaserollingreleasetarget.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `source`                                                                                                   | [models.GetRollingReleaseRollingReleaseSource](../models/getrollingreleaserollingreleasesource.md)         | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `createdAt`                                                                                                | *number*                                                                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `readyState`                                                                                               | [models.GetRollingReleaseRollingReleaseReadyState](../models/getrollingreleaserollingreleasereadystate.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `readyStateAt`                                                                                             | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |