# CreateDeploymentServicesRedirects

## Example Usage

```typescript
import { CreateDeploymentServicesRedirects } from "@vercel/sdk/models/createdeploymentrouteslocale.js";

let value: CreateDeploymentServicesRedirects = {
  source: "<value>",
  destination: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `source`                                              | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `destination`                                         | *string*                                              | :heavy_check_mark:                                    | N/A                                                   |
| `permanent`                                           | *boolean*                                             | :heavy_minus_sign:                                    | N/A                                                   |
| `statusCode`                                          | *number*                                              | :heavy_minus_sign:                                    | N/A                                                   |
| `has`                                                 | *models.CreateDeploymentServicesDeploymentsHas*[]     | :heavy_minus_sign:                                    | N/A                                                   |
| `missing`                                             | *models.CreateDeploymentServicesDeploymentsMissing*[] | :heavy_minus_sign:                                    | N/A                                                   |
| `env`                                                 | *string*[]                                            | :heavy_minus_sign:                                    | N/A                                                   |