# GetProjectDomainsResponseBody1

## Example Usage

```typescript
import { GetProjectDomainsResponseBody1 } from "@vercel/sdk/models/getprojectdomainsop.js";

let value: GetProjectDomainsResponseBody1 = {
  domains: [
    {
      name: "<value>",
      apexName: "<value>",
      projectId: "<id>",
      verified: false,
    },
  ],
  pagination: {
    count: 7996.46,
    next: 4630.41,
    prev: 8962.06,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `domains`                                                                                              | [models.ResponseBodyDomains](../models/responsebodydomains.md)[]                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pagination`                                                                                           | [models.GetProjectDomainsResponseBodyPagination](../models/getprojectdomainsresponsebodypagination.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |