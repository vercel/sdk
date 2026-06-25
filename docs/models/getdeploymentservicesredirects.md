# GetDeploymentServicesRedirects

## Example Usage

```typescript
import { GetDeploymentServicesRedirects } from "@vercel/sdk/models/getdeploymentmissingdeploymentsresponse1.js";

let value: GetDeploymentServicesRedirects = {
  source: "<value>",
  destination: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `source`                                | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `destination`                           | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `permanent`                             | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `statusCode`                            | *number*                                | :heavy_minus_sign:                      | N/A                                     |
| `has`                                   | *models.GetDeploymentServicesHas*[]     | :heavy_minus_sign:                      | N/A                                     |
| `missing`                               | *models.GetDeploymentServicesMissing*[] | :heavy_minus_sign:                      | N/A                                     |
| `env`                                   | *string*[]                              | :heavy_minus_sign:                      | N/A                                     |