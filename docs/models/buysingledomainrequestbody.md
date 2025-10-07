# BuySingleDomainRequestBody

## Example Usage

```typescript
import { BuySingleDomainRequestBody } from "@vercel/sdk/models/buysingledomainop.js";

let value: BuySingleDomainRequestBody = {
  autoRenew: false,
  years: 6366.02,
  expectedPrice: 9357.51,
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
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `autoRenew`                                                  | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `years`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `expectedPrice`                                              | *number*                                                     | :heavy_check_mark:                                           | Represents a monetary amount in USD dollars                  |
| `contactInformation`                                         | [models.ContactInformation](../models/contactinformation.md) | :heavy_check_mark:                                           | N/A                                                          |