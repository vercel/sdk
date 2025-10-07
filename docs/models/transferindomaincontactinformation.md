# TransferInDomainContactInformation

## Example Usage

```typescript
import { TransferInDomainContactInformation } from "@vercel/sdk/models/transferindomainop.js";

let value: TransferInDomainContactInformation = {
  firstName: "Kirstin",
  lastName: "Ledner",
  email: "Anthony61@gmail.com",
  phone: "279-247-7310 x844",
  address1: "<value>",
  city: "Dorotheaburgh",
  state: "Illinois",
  zip: "81774",
  country: "Samoa",
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `firstName`                             | *string*                                | :heavy_check_mark:                      | a non empty string                      |
| `lastName`                              | *string*                                | :heavy_check_mark:                      | a non empty string                      |
| `email`                                 | *string*                                | :heavy_check_mark:                      | a non empty string                      |
| `phone`                                 | *string*                                | :heavy_check_mark:                      | A valid E.164 phone number              |
| `address1`                              | *string*                                | :heavy_check_mark:                      | a non empty string                      |
| `address2`                              | *string*                                | :heavy_minus_sign:                      | a non empty string                      |
| `city`                                  | *string*                                | :heavy_check_mark:                      | a non empty string                      |
| `state`                                 | *string*                                | :heavy_check_mark:                      | a non empty string                      |
| `zip`                                   | *string*                                | :heavy_check_mark:                      | a non empty string                      |
| `country`                               | *string*                                | :heavy_check_mark:                      | A valid ISO 3166-1 alpha-2 country code |
| `companyName`                           | *string*                                | :heavy_minus_sign:                      | a non empty string                      |
| `fax`                                   | *string*                                | :heavy_minus_sign:                      | A valid E.164 phone number              |