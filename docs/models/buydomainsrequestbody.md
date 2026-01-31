# BuyDomainsRequestBody

## Example Usage

```typescript
import { BuyDomainsRequestBody } from "@vercel/sdk/models/buydomainsop.js";

let value: BuyDomainsRequestBody = {
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
};
```

## Fields

| Field                                                                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                                                                  | Required                                                                                                                                                                                                                                                              | Description                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `domains`                                                                                                                                                                                                                                                             | [models.Domains](../models/domains.md)[]                                                                                                                                                                                                                              | :heavy_check_mark:                                                                                                                                                                                                                                                    | N/A                                                                                                                                                                                                                                                                   |
| `contactInformation`                                                                                                                                                                                                                                                  | [models.BuyDomainsContactInformation](../models/buydomainscontactinformation.md)                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                    | The contact information for the domain. Some TLDs require additional contact information. Use the [Get contact info schema](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema) endpoint to retrieve the required fields. |