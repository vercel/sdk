# GetAccountInfoResponseBody

## Example Usage

```typescript
import { GetAccountInfoResponseBody } from "@vercel/sdk/models/getaccountinfoop.js";

let value: GetAccountInfoResponseBody = {
  contact: {
    email: "Providenci2@gmail.com",
  },
  contacts: [
    {
      email: "Camilla73@gmail.com",
    },
  ],
  url: "https://minty-apparatus.com",
};
```

## Fields

| Field                                                                                                                                                                         | Type                                                                                                                                                                          | Required                                                                                                                                                                      | Description                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contact`                                                                                                                                                                     | [models.Contact](../models/contact.md)                                                                                                                                        | :heavy_check_mark:                                                                                                                                                            | The best contact for the integration, which can change as team members and their roles change.                                                                                |
| `contacts`                                                                                                                                                                    | [models.Contacts](../models/contacts.md)[]                                                                                                                                    | :heavy_check_mark:                                                                                                                                                            | Up to 3 contacts for the integration. `contact` comes first, followed by the confirmed owners of the team, longest-standing first. For a personal account, the account owner. |
| `name`                                                                                                                                                                        | *string*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                            | The name of the team the installation is tied to.                                                                                                                             |
| `url`                                                                                                                                                                         | *string*                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                            | A URL linking to the installation in the Vercel Dashboard.                                                                                                                    |