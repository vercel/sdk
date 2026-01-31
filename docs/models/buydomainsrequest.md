# BuyDomainsRequest

## Example Usage

```typescript
import { BuyDomainsRequest } from "@vercel/sdk/models/buydomainsop.js";

let value: BuyDomainsRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  requestBody: {
    domains: [
      {
        domainName: "concerned-bell.name",
        autoRenew: true,
        years: 101.03,
        expectedPrice: 3273.83,
      },
    ],
    contactInformation: {
      firstName: "Ansel",
      lastName: "Nitzsche",
      email: "Emely_Torphy@yahoo.com",
      phone: "(341) 568-5177 x9849",
      address1: "<value>",
      city: "Lake Zettaville",
      state: "Indiana",
      zip: "08371",
      country: "Seychelles",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `teamId`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                | team_1a2b3c4d5e6f7g8h9i0j1k2l                                      |
| `requestBody`                                                      | [models.BuyDomainsRequestBody](../models/buydomainsrequestbody.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |