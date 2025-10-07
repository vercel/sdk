# RenewDomainContactInformation

## Example Usage

```typescript
import { RenewDomainContactInformation } from "@vercel/sdk/models/renewdomainop.js";

let value: RenewDomainContactInformation = {
  firstName: "Monserrat",
  lastName: "Roberts",
  email: "Nils.Keeling@hotmail.com",
  phone: "(939) 271-5135 x433",
  address1: "<value>",
  city: "Oranborough",
  state: "New Hampshire",
  zip: "77125",
  country: "Indonesia",
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