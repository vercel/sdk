# GetDeploymentServicesRewrites

## Example Usage

```typescript
import { GetDeploymentServicesRewrites } from "@vercel/sdk/models/getdeploymentresponsebody.js";

let value: GetDeploymentServicesRewrites = {
  source: "<value>",
  destination: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `source`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `destination`                                                                            | *models.GetDeploymentServicesDestination*                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `transforms`                                                                             | [models.GetDeploymentServicesTransforms](../models/getdeploymentservicestransforms.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `has`                                                                                    | *models.GetDeploymentServicesDeploymentsHas*[]                                           | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `missing`                                                                                | *models.GetDeploymentServicesDeploymentsMissing*[]                                       | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `statusCode`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `env`                                                                                    | *string*[]                                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `respectOriginCacheControl`                                                              | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      |