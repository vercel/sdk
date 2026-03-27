# BuyCreditsRequest

## Example Usage

```typescript
import { BuyCreditsRequest } from "@vercel/sdk/models/buycreditsop.js";

let value: BuyCreditsRequest = {
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  slug: "my-team-url-slug",
  requestBody: {
    item: {
      type: "credits",
      creditType: "v0",
      amount: 77824,
    },
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `source`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | The source of the purchase request. Defaults to `api` if not specified. |                                                                         |
| `teamId`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | The Team identifier to perform the request on behalf of.                | team_1a2b3c4d5e6f7g8h9i0j1k2l                                           |
| `slug`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | The Team slug to perform the request on behalf of.                      | my-team-url-slug                                                        |
| `requestBody`                                                           | [models.BuyCreditsRequestBody](../models/buycreditsrequestbody.md)      | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |