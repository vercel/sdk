# ClaimDomainOwnershipResponseBody

Domain ownership successfully claimed.

## Example Usage

```typescript
import { ClaimDomainOwnershipResponseBody } from "@vercel/sdk/models/claimdomainownershipop.js";

let value: ClaimDomainOwnershipResponseBody = {
  domain: {
    expiresAt: null,
    verified: true,
    nameservers: [
      "ns1.nameserver.net",
      "ns2.nameserver.net",
    ],
    intendedNameservers: [
      "ns1.vercel-dns.com",
      "ns2.vercel-dns.com",
    ],
    customNameservers: [
      "ns1.nameserver.net",
      "ns2.nameserver.net",
    ],
    creator: {
      username: "vercel_user",
      email: "demo@example.com",
      id: "ZspSRT4ljIEEmMHgoDwKWDei",
    },
    name: "example.com",
    teamId: "<id>",
    boughtAt: 1613602938882,
    createdAt: 1613602938882,
    id: "EmTbe5CEJyTk2yVAHBUWy4A3sRusca3GCwRjTC1bpeVnt1",
    renew: true,
    serviceType: "zeit.world",
    transferredAt: 1613602938882,
    transferStartedAt: 1613602938882,
    userId: "<id>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `domain`                                                                     | [models.ClaimDomainOwnershipDomain](../models/claimdomainownershipdomain.md) | :heavy_check_mark:                                                           | N/A                                                                          |