# GetDomainProjectDomainsResponseBody

Successful response retrieving project domains for an apex domain.

## Example Usage

```typescript
import { GetDomainProjectDomainsResponseBody } from "@vercel/sdk/models/getdomainprojectdomainsop.js";

let value: GetDomainProjectDomainsResponseBody = {
  pagination: {
    count: 20,
    next: 1540095775951,
    prev: 1540095775951,
  },
  projectDomains: [
    {
      apexName: "<value>",
      name: "<value>",
      projectId: "<id>",
      verified: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                           | Type                                                                                                                                                            | Required                                                                                                                                                        | Description                                                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |
| `projectDomains`                                                                                                                                                | [models.ProjectDomains](../models/projectdomains.md)[]                                                                                                          | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |