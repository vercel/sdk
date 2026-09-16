# CreateDeploymentServicesRedirects

## Example Usage

```typescript
import { CreateDeploymentServicesRedirects } from "@vercel/sdk/models/createdeploymentresponsebody.js";

let value: CreateDeploymentServicesRedirects = {
  destination: "<value>",
  source: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `destination`                                         | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `env`                                                 | *string*[]                                            | :heavy_minus_sign:                                    | N/A                                                   |
| `has`                                                 | *models.CreateDeploymentServicesDeploymentsHas*[]     | :heavy_minus_sign:                                    | N/A                                                   |
| `missing`                                             | *models.CreateDeploymentServicesDeploymentsMissing*[] | :heavy_minus_sign:                                    | N/A                                                   |
| `permanent`                                           | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |
| `source`                                              | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `statusCode`                                          | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |