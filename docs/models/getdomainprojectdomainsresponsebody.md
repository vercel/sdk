# GetDomainProjectDomainsResponseBody

Successful response retrieving project domains for an apex domain.

## Example Usage

```typescript
import { GetDomainProjectDomainsResponseBody } from "@vercel/sdk/models/getdomainprojectdomainsop.js";

let value: GetDomainProjectDomainsResponseBody = {
  projectDomains: [
    {
      name: "<value>",
      apexName: "<value>",
      projectId: "<id>",
      verified: false,
    },
  ],
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `projectDomains`                                                                                                                                                | [models.ProjectDomains](../models/projectdomains.md)[]                                                                                                          | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |