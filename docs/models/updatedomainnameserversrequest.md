# UpdateDomainNameserversRequest

## Example Usage

```typescript
import { UpdateDomainNameserversRequest } from "@vercel/sdk/models/updatedomainnameserversop.js";

let value: UpdateDomainNameserversRequest = {
  domain: "thorny-pecan.biz",
  teamId: "team_1a2b3c4d5e6f7g8h9i0j1k2l",
  requestBody: {
    nameservers: [],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `domain`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |
| `teamId`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | N/A                                                                                          | team_1a2b3c4d5e6f7g8h9i0j1k2l                                                                |
| `requestBody`                                                                                | [models.UpdateDomainNameserversRequestBody](../models/updatedomainnameserversrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |                                                                                              |