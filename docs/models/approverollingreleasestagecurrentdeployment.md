# ApproveRollingReleaseStageCurrentDeployment

The current deployment receiving production traffic

## Example Usage

```typescript
import { ApproveRollingReleaseStageCurrentDeployment } from "@vercel/sdk/models/approverollingreleasestageop.js";

let value: ApproveRollingReleaseStageCurrentDeployment = {
  id: "dpl_abc123",
  name: "my-shop@main",
  url: "my-shop.vercel.app",
  target: "production",
  source: "git",
  createdAt: 1716206500000,
  readyState: "READY",
  readyStateAt: 1716206800000,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `url`                                                                                            | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `target`                                                                                         | [models.ApproveRollingReleaseStageTarget](../models/approverollingreleasestagetarget.md)         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `source`                                                                                         | [models.ApproveRollingReleaseStageSource](../models/approverollingreleasestagesource.md)         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `readyState`                                                                                     | [models.ApproveRollingReleaseStageReadyState](../models/approverollingreleasestagereadystate.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `readyStateAt`                                                                                   | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |