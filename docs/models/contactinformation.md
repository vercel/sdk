# ContactInformation

The contact information for the domain. Some TLDs require additional contact information. Use the [Get contact info schema](https://vercel.com/docs/rest-api/reference/endpoints/domains-registrar/get-contact-info-schema) endpoint to retrieve the required fields.

## Example Usage

```typescript
import { ContactInformation } from "@vercel/sdk/models/buysingledomainop.js";

let value: ContactInformation = {
  firstName: "Louie",
  lastName: "Bayer-Bernier",
  email: "Bettye53@gmail.com",
  phone: "761-684-9318 x5838",
  address1: "<value>",
  city: "East Jordan",
  state: "Connecticut",
  zip: "35007-7802",
  country: "Israel",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `firstName`                                  | *string*                                     | :heavy_check_mark:                           | a non empty string                           |
| `lastName`                                   | *string*                                     | :heavy_check_mark:                           | a non empty string                           |
| `email`                                      | *string*                                     | :heavy_check_mark:                           | a non empty string                           |
| `phone`                                      | *string*                                     | :heavy_check_mark:                           | A valid E.164 phone number                   |
| `address1`                                   | *string*                                     | :heavy_check_mark:                           | a non empty string                           |
| `address2`                                   | *string*                                     | :heavy_minus_sign:                           | a non empty string                           |
| `city`                                       | *string*                                     | :heavy_check_mark:                           | a non empty string                           |
| `state`                                      | *string*                                     | :heavy_check_mark:                           | a non empty string                           |
| `zip`                                        | *string*                                     | :heavy_check_mark:                           | a non empty string                           |
| `country`                                    | *string*                                     | :heavy_check_mark:                           | A valid ISO 3166-1 alpha-2 country code      |
| `companyName`                                | *string*                                     | :heavy_minus_sign:                           | a non empty string                           |
| `fax`                                        | *string*                                     | :heavy_minus_sign:                           | A valid E.164 phone number                   |
| `additional`                                 | [models.Additional](../models/additional.md) | :heavy_minus_sign:                           | N/A                                          |