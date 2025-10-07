# BuySingleDomainRequest

## Example Usage

```typescript
import { BuySingleDomainRequest } from "@vercel/sdk/models/buysingledomainop.js";

let value: BuySingleDomainRequest = {
  domain: "feline-charm.biz",
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `domain`                                                                     | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `requestBody`                                                                | [models.BuySingleDomainRequestBody](../models/buysingledomainrequestbody.md) | :heavy_check_mark:                                                           | N/A                                                                          |