# CancelDeploymentServicesRedirects

## Example Usage

```typescript
import { CancelDeploymentServicesRedirects } from "@vercel/sdk/models/canceldeploymentgitrepodeploymentsresponseownertype.js";

let value: CancelDeploymentServicesRedirects = {
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
| `has`                                                 | *models.CancelDeploymentServicesDeploymentsHas*[]     | :heavy_minus_sign:                                    | N/A                                                   |
| `missing`                                             | *models.CancelDeploymentServicesDeploymentsMissing*[] | :heavy_minus_sign:                                    | N/A                                                   |
| `env`                                                 | *string*[]                                            | :heavy_minus_sign:                                    | N/A                                                   |