# GetDeploymentServicesRedirects

## Example Usage

```typescript
import { GetDeploymentServicesRedirects } from "@vercel/sdk/models/getdeploymentresponsebodydeploymentsduration.js";

let value: GetDeploymentServicesRedirects = {
  destination: "<value>",
  source: "<value>",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `destination`                           | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `env`                                   | *string*[]                              | :heavy_minus_sign:                      | N/A                                     |
| `has`                                   | *models.GetDeploymentServicesHas*[]     | :heavy_minus_sign:                      | N/A                                     |
| `missing`                               | *models.GetDeploymentServicesMissing*[] | :heavy_minus_sign:                      | N/A                                     |
| `permanent`                             | *boolean*                               | :heavy_minus_sign:                      | N/A                                     |
| `source`                                | *string*                                | :heavy_check_mark:                      | N/A                                     |
| `statusCode`                            | *number*                                | :heavy_minus_sign:                      | N/A                                     |