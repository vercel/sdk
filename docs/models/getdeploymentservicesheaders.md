# GetDeploymentServicesHeaders

## Example Usage

```typescript
import { GetDeploymentServicesHeaders } from "@vercel/sdk/models/getdeploymentresponsebody1.js";

let value: GetDeploymentServicesHeaders = {
  headers: [
    {
      key: "<key>",
      value: "<value>",
    },
  ],
  source: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `has`                                                                                                    | *models.GetDeploymentServicesDeploymentsResponseHas*[]                                                   | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `headers`                                                                                                | [models.GetDeploymentServicesDeploymentsHeaders](../models/getdeploymentservicesdeploymentsheaders.md)[] | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `missing`                                                                                                | *models.GetDeploymentServicesDeploymentsResponseMissing*[]                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `source`                                                                                                 | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |