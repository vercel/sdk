# BuyDomainRequest

## Example Usage

```typescript
import { BuyDomainRequest } from "@vercel/sdk/models/buydomainop.js";

let value: BuyDomainRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    name: "example.com",
    expectedPrice: 10,
    renew: true,
    country: "US",
    orgName: "Acme Inc.",
    firstName: "Jane",
    lastName: "Doe",
    address1: "340 S Lemon Ave Suite 4133",
    city: "San Francisco",
    state: "CA",
    postalCode: "91789",
    phone: "+1.4158551452",
    email: "jane.doe@someplace.com",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `teamId`                                                         | *string*                                                         | :heavy_minus_sign:                                               | The Team identifier to perform the request on behalf of.         | team_1a2b3c4d5e6f7g8h9i0j1k2l                                    |
| `slug`                                                           | *string*                                                         | :heavy_minus_sign:                                               | The Team slug to perform the request on behalf of.               | my-team-url-slug                                                 |
| `requestBody`                                                    | [models.BuyDomainRequestBody](../models/buydomainrequestbody.md) | :heavy_check_mark:                                               | N/A                                                              |                                                                  |