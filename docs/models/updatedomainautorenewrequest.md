# UpdateDomainAutoRenewRequest

## Example Usage

```typescript
import { UpdateDomainAutoRenewRequest } from "@vercel/sdk/models/updatedomainautorenewop.js";

let value: UpdateDomainAutoRenewRequest = {
  domain: "granular-rust.com",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  requestBody: {
    autoRenew: false,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `domain`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `teamId`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                            |
| `requestBody`                                                                            | [models.UpdateDomainAutoRenewRequestBody](../models/updatedomainautorenewrequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |