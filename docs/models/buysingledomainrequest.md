# BuySingleDomainRequest

## Example Usage

```typescript
import { BuySingleDomainRequest } from "@vercel/sdk/models/buysingledomainop.js";

let value: BuySingleDomainRequest = {
  domain: "feline-charm.biz",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  requestBody: {
    autoRenew: true,
    years: 2686.01,
    expectedPrice: 4248.66,
    contactInformation: {
      firstName: "Ebony",
      lastName: "Graham",
      email: "Aaliyah_Predovic60@yahoo.com",
      phone: "439.308.5038 x5255",
      address1: "<value>",
      city: "Amberfurt",
      state: "North Dakota",
      zip: "89617",
      country: "Cocos (Keeling) Islands",
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `domain`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
| `teamId`                                                                     | *string*                                                                     | :heavy_minus_sign:                                                           | N/A                                                                          | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                |
| `requestBody`                                                                | [models.BuySingleDomainRequestBody](../models/buysingledomainrequestbody.md) | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |