# ServicesRedirects

## Example Usage

```typescript
import { ServicesRedirects } from "@vercel/sdk/models/createdeploymentrouteslocale.js";

let value: ServicesRedirects = {
  source: "<value>",
  destination: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `source`                                   | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `destination`                              | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `permanent`                                | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        |
| `statusCode`                               | *number*                                   | :heavy_minus_sign:                         | N/A                                        |
| `has`                                      | *models.CreateDeploymentServicesHas*[]     | :heavy_minus_sign:                         | N/A                                        |
| `missing`                                  | *models.CreateDeploymentServicesMissing*[] | :heavy_minus_sign:                         | N/A                                        |
| `env`                                      | *string*[]                                 | :heavy_minus_sign:                         | N/A                                        |