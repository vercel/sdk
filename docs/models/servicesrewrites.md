# ServicesRewrites

## Example Usage

```typescript
import { ServicesRewrites } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: ServicesRewrites = {
  destination: {
    service: "<value>",
  },
  source: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `destination`                                                                                  | *models.CreateDeploymentServicesDestination*                                                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `env`                                                                                          | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `has`                                                                                          | *models.CreateDeploymentServicesDeploymentsResponseHas*[]                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `missing`                                                                                      | *models.CreateDeploymentServicesDeploymentsResponseMissing*[]                                  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `respectOriginCacheControl`                                                                    | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `source`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `statusCode`                                                                                   | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `transforms`                                                                                   | [models.CreateDeploymentServicesTransforms](../models/createdeploymentservicestransforms.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |