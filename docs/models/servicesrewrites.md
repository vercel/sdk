# ServicesRewrites

## Example Usage

```typescript
import { ServicesRewrites } from "@vercel/sdk/models/canceldeploymentgitrepodeploymentsresponseownertype.js";

let value: ServicesRewrites = {
  source: "<value>",
  destination: {
    service: "<value>",
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `source`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `destination`                                                                                  | *models.CancelDeploymentServicesDestination*                                                   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `transforms`                                                                                   | [models.CancelDeploymentServicesTransforms](../models/canceldeploymentservicestransforms.md)[] | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `has`                                                                                          | *models.CancelDeploymentServicesDeploymentsResponseHas*[]                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `missing`                                                                                      | *models.CancelDeploymentServicesDeploymentsResponseMissing*[]                                  | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `statusCode`                                                                                   | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `env`                                                                                          | *string*[]                                                                                     | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `respectOriginCacheControl`                                                                    | *boolean*                                                                                      | :heavy_minus_sign:                                                                             | N/A                                                                                            |