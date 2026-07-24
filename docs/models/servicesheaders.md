# ServicesHeaders

## Example Usage

```typescript
import { ServicesHeaders } from "@vercel/sdk/models/canceldeploymentgitrepoownertype.js";

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
| `has`                                                                                    | *models.ServicesHas*[]                                                                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `missing`                                                                                | *models.ServicesMissing*[]                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |