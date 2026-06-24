# Rewrites

## Example Usage

```typescript
import { Rewrites } from "@vercel/sdk/models/includefiles.js";

let value: Rewrites = {
  source: "<value>",
  destination: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `source`                                              | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `destination`                                         | *models.ServicesDestination*                          | :heavy_check_mark:                                    | N/A                                                   |
| `has`                                                 | *models.CreateDeploymentServicesDeploymentsHas*[]     | :heavy_minus_sign:                                    | N/A                                                   |
| `missing`                                             | *models.CreateDeploymentServicesDeploymentsMissing*[] | :heavy_minus_sign:                                    | N/A                                                   |
| `statusCode`                                          | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `env`                                                 | *string*[]                                            | :heavy_minus_sign:                                    | N/A                                                   |
| `respectOriginCacheControl`                           | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |