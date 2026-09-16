# ServicesRedirects

## Example Usage

```typescript
import { ServicesRedirects } from "@vercel/sdk/models/canceldeploymentdestinationdeployments2.js";

let value: ServicesRedirects = {
  destination: "<value>",
  source: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `destination`                              | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `env`                                      | *string*[]                                 | :heavy_minus_sign:                         | N/A                                        |
| `has`                                      | *models.CancelDeploymentServicesHas*[]     | :heavy_minus_sign:                         | N/A                                        |
| `missing`                                  | *models.CancelDeploymentServicesMissing*[] | :heavy_minus_sign:                         | N/A                                        |
| `permanent`                                | *boolean*                                  | :heavy_minus_sign:                         | N/A                                        |
| `source`                                   | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `statusCode`                               | *number*                                   | :heavy_minus_sign:                         | N/A                                        |