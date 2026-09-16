# Rewrites

## Example Usage

```typescript
import { Rewrites } from "@vercel/sdk/models/canceldeploymentdestinationdeployments2.js";

let value: Rewrites = {
  destination: "<value>",
  source: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `destination`                                                  | *models.ServicesDestination*                                   | :heavy_check_mark:                                             | N/A                                                            |
| `env`                                                          | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `has`                                                          | *models.CancelDeploymentServicesDeploymentsHas*[]              | :heavy_minus_sign:                                             | N/A                                                            |
| `missing`                                                      | *models.CancelDeploymentServicesDeploymentsMissing*[]          | :heavy_minus_sign:                                             | N/A                                                            |
| `respectOriginCacheControl`                                    | *boolean*                                                      | :heavy_minus_sign:                                             | N/A                                                            |
| `source`                                                       | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `statusCode`                                                   | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `transforms`                                                   | [models.ServicesTransforms](../models/servicestransforms.md)[] | :heavy_minus_sign:                                             | N/A                                                            |