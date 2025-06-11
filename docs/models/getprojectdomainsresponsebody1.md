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
      verified: true,
    },
  ],
  pagination: {
    count: 8962.06,
    next: 1793.22,
    prev: null,
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `domains`                                                                                              | [models.ResponseBodyDomains](../models/responsebodydomains.md)[]                                       | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `pagination`                                                                                           | [models.GetProjectDomainsResponseBodyPagination](../models/getprojectdomainsresponsebodypagination.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |