# UpdateDomainAutoRenewRequest

## Example Usage

```typescript
import { UpdateDomainAutoRenewRequest } from "@vercel/sdk/models/updatedomainautorenewop.js";

let value: UpdateDomainAutoRenewRequest = {
  domain: "granular-rust.com",
  requestBody: {
    autoRenew: false,
  },
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `domain`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `requestBody`                                                                            | [models.UpdateDomainAutoRenewRequestBody](../models/updatedomainautorenewrequestbody.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |