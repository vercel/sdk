# UpdateDomainNameserversRequest

## Example Usage

```typescript
import { UpdateDomainNameserversRequest } from "@vercel/sdk/models/updatedomainnameserversop.js";

let value: UpdateDomainNameserversRequest = {
  domain: "thorny-pecan.biz",
  requestBody: {
    nameservers: [],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `domain`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `requestBody`                                                                                | [models.UpdateDomainNameserversRequestBody](../models/updatedomainnameserversrequestbody.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |