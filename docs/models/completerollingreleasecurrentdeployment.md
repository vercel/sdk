# CompleteRollingReleaseCurrentDeployment

The current deployment receiving production traffic

## Example Usage

```typescript
import { CompleteRollingReleaseCurrentDeployment } from "@vercel/sdk/models/completerollingreleaseop.js";

let value: CompleteRollingReleaseCurrentDeployment = {
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `url`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `target`                                                                                 | [models.CompleteRollingReleaseTarget](../models/completerollingreleasetarget.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `source`                                                                                 | [models.CompleteRollingReleaseSource](../models/completerollingreleasesource.md)         | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `readyState`                                                                             | [models.CompleteRollingReleaseReadyState](../models/completerollingreleasereadystate.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `readyStateAt`                                                                           | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |