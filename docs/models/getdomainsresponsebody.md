# GetDomainsResponseBody

Successful response retrieving a list of domains.

## Example Usage

```typescript
import { GetDomainsResponseBody } from "@vercel/sdk/models/getdomainsop.js";

let value: GetDomainsResponseBody = {
  domains: [
    {
      boughtAt: 1613602938882,
      createdAt: 1613602938882,
      creator: {
        email: "demo@example.com",
        id: "ZspSRT4ljIEEmMHgoDwKWDei",
        username: "vercel_user",
      },
      customNameservers: [
        "ns1.nameserver.net",
        "ns2.nameserver.net",
      ],
      echMode: "auto",
      expiresAt: 2499.29,
      id: "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
      intendedNameservers: [
        "ns1.vercel-dns.com",
        "ns2.vercel-dns.com",
      ],
      name: "example.com",
      nameservers: [
        "ns1.nameserver.net",
        "ns2.nameserver.net",
      ],
      renew: true,
      serviceType: "zeit.world",
      teamId: "<id>",
      transferredAt: 1613602938882,
      transferStartedAt: 1613602938882,
      userId: "<id>",
      verified: true,
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
| `domains`                                                                                                                                                       | [models.GetDomainsDomains](../models/getdomainsdomains.md)[]                                                                                                    | :heavy_check_mark:                                                                                                                                              | N/A                                                                                                                                                             |
| `pagination`                                                                                                                                                    | [models.Pagination](../models/pagination.md)                                                                                                                    | :heavy_check_mark:                                                                                                                                              | This object contains information related to the pagination of the current request, including the necessary parameters to get the next or previous page of data. |