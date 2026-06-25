# ServicesHeaders

## Example Usage

```typescript
import { ServicesHeaders } from "@vercel/sdk/models/canceldeploymentgitrepodeploymentsresponseownertype.js";

let value: ServicesHeaders = {
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `source`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `headers`                                                                                | [models.CancelDeploymentServicesHeaders](../models/canceldeploymentservicesheaders.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `has`                                                                                    | *models.CancelDeploymentServicesHas*[]                                                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `missing`                                                                                | *models.CancelDeploymentServicesMissing*[]                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |