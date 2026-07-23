# CreateDeploymentServicesHeaders

## Example Usage

```typescript
import { CreateDeploymentServicesHeaders } from "@vercel/sdk/models/createdeploymentrouteslocale.js";

let value: CreateDeploymentServicesHeaders = {
  source: "<value>",
  headers: [],
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `source`                                                                                                       | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `headers`                                                                                                      | [models.CreateDeploymentServicesDeploymentsHeaders](../models/createdeploymentservicesdeploymentsheaders.md)[] | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `has`                                                                                                          | *models.CreateDeploymentServicesHas*[]                                                                         | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |
| `missing`                                                                                                      | *models.CreateDeploymentServicesMissing*[]                                                                     | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |