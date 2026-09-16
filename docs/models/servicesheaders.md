# ServicesHeaders

## Example Usage

```typescript
import { ServicesHeaders } from "@vercel/sdk/models/canceldeploymentdestinationdeployments2.js";

let value: ServicesHeaders = {
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

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `has`                                                                                    | *models.ServicesHas*[]                                                                   | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `headers`                                                                                | [models.CancelDeploymentServicesHeaders](../models/canceldeploymentservicesheaders.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `missing`                                                                                | *models.ServicesMissing*[]                                                               | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `source`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |