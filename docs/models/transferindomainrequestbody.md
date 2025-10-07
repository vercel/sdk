# TransferInDomainRequestBody

## Example Usage

```typescript
import { TransferInDomainRequestBody } from "@vercel/sdk/models/transferindomainop.js";

let value: TransferInDomainRequestBody = {
  authCode: "<value>",
  autoRenew: true,
  years: 4262.75,
  expectedPrice: 2936.87,
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
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `authCode`                                                                                   | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `autoRenew`                                                                                  | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `years`                                                                                      | *number*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `expectedPrice`                                                                              | *number*                                                                                     | :heavy_check_mark:                                                                           | Represents a monetary amount in USD dollars                                                  |
| `contactInformation`                                                                         | [models.TransferInDomainContactInformation](../models/transferindomaincontactinformation.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |