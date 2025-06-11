# CurrentDeployment

The current deployment receiving production traffic

## Example Usage

```typescript
import { CurrentDeployment } from "@vercel/sdk/models/getrollingreleaseop.js";

let value: CurrentDeployment = {
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `url`                                                                          | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `target`                                                                       | [models.GetRollingReleaseTarget](../models/getrollingreleasetarget.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `source`                                                                       | [models.GetRollingReleaseSource](../models/getrollingreleasesource.md)         | :heavy_minus_sign:                                                             | N/A                                                                            |
| `createdAt`                                                                    | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `readyState`                                                                   | [models.GetRollingReleaseReadyState](../models/getrollingreleasereadystate.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `readyStateAt`                                                                 | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |