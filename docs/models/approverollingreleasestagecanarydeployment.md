# ApproveRollingReleaseStageCanaryDeployment

The canary deployment being rolled out

## Example Usage

```typescript
import { ApproveRollingReleaseStageCanaryDeployment } from "@vercel/sdk/models/approverollingreleasestageop.js";

let value: ApproveRollingReleaseStageCanaryDeployment = {
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

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                         | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `url`                                                                                                                        | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `target`                                                                                                                     | [models.ApproveRollingReleaseStageRollingReleaseTarget](../models/approverollingreleasestagerollingreleasetarget.md)         | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `source`                                                                                                                     | [models.ApproveRollingReleaseStageRollingReleaseSource](../models/approverollingreleasestagerollingreleasesource.md)         | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |
| `createdAt`                                                                                                                  | *number*                                                                                                                     | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `readyState`                                                                                                                 | [models.ApproveRollingReleaseStageRollingReleaseReadyState](../models/approverollingreleasestagerollingreleasereadystate.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |
| `readyStateAt`                                                                                                               | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |