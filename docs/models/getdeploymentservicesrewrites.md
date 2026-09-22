# GetDeploymentServicesRewrites

## Example Usage

```typescript
import { GetDeploymentServicesRewrites } from "@vercel/sdk/models/getdeploymentservicestrigger.js";

let value: GetDeploymentServicesRewrites = {
  destination: "<value>",
  source: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `destination`                                                                            | *models.GetDeploymentServicesDestination*                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `env`                                                                                    | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `has`                                                                                    | *models.GetDeploymentServicesDeploymentsHas*[]                                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `missing`                                                                                | *models.GetDeploymentServicesDeploymentsMissing*[]                                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `respectOriginCacheControl`                                                              | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `source`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `statusCode`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `transforms`                                                                             | [models.GetDeploymentServicesTransforms](../models/getdeploymentservicestransforms.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |