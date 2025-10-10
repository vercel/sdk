# RenewDomainRequest

## Example Usage

```typescript
import { RenewDomainRequest } from "@vercel/sdk/models/renewdomainop.js";

let value: RenewDomainRequest = {
  domain: "fatherly-ad.info",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  requestBody: {
    years: 6227.86,
    expectedPrice: 3189.85,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `domain`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
| `teamId`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  | team_1a2b3c4d5e6f7g8h9i0j1k2l                                        |
| `requestBody`                                                        | [models.RenewDomainRequestBody](../models/renewdomainrequestbody.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |