# GetDomainResponseBody

Successful response retrieving an information for a specific domains.

## Example Usage

```typescript
import { GetDomainResponseBody } from "@vercel/sdk/models/getdomainop.js";

let value: GetDomainResponseBody = {
  domain: {
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
    expiresAt: 4010.28,
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
    suffix: false,
    teamId: "<id>",
    transferredAt: 1613602938882,
    transferStartedAt: 1613602938882,
    userId: "<id>",
    verified: true,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `domain`                                               | [models.GetDomainDomain](../models/getdomaindomain.md) | :heavy_check_mark:                                     | N/A                                                    |