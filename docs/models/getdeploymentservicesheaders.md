# GetDeploymentServicesHeaders

## Example Usage

```typescript
import { GetDeploymentServicesHeaders } from "@vercel/sdk/models/getdeploymentmissingdeploymentsresponse1.js";

let value: GetDeploymentServicesHeaders = {
  source: "<value>",
  headers: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `headers`                                                                                                | [models.GetDeploymentServicesDeploymentsHeaders](../models/getdeploymentservicesdeploymentsheaders.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `has`                                                                                                    | *models.GetDeploymentServicesDeploymentsResponseHas*[]                                                   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `missing`                                                                                                | *models.GetDeploymentServicesDeploymentsResponseMissing*[]                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |