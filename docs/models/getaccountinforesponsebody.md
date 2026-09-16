# GetAccountInfoResponseBody

## Example Usage

```typescript
import { GetAccountInfoResponseBody } from "@vercel/sdk/models/getaccountinfoop.js";

let value: GetAccountInfoResponseBody = {
  contact: {
    email: "Providenci2@gmail.com",
  },
  url: "https://mindless-legend.com",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `contact`                                                                                      | [models.Contact](../models/contact.md)                                                         | :heavy_check_mark:                                                                             | The best contact for the integration, which can change as team members and their roles change. |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The name of the team the installation is tied to.                                              |
| `url`                                                                                          | *string*                                                                                       | :heavy_check_mark:                                                                             | A URL linking to the installation in the Vercel Dashboard.                                     |