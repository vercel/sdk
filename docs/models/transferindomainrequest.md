# TransferInDomainRequest

## Example Usage

```typescript
import { TransferInDomainRequest } from "@vercel/sdk/models/transferindomainop.js";

let value: TransferInDomainRequest = {
  domain: "rewarding-scorn.com",
  requestBody: {
    authCode: "<value>",
    autoRenew: false,
    years: 1056.14,
    expectedPrice: 1321.24,
    contactInformation: {
      firstName: "Paige",
      lastName: "Dicki",
      email: "Hailie.Kihn88@gmail.com",
      phone: "1-337-543-3908 x05676",
      address1: "<value>",
      city: "Palm Desert",
      state: "New Jersey",
      zip: "34043",
      country: "Malta",
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `domain`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `requestBody`                                                                  | [models.TransferInDomainRequestBody](../models/transferindomainrequestbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |