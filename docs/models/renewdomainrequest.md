# RenewDomainRequest

## Example Usage

```typescript
import { RenewDomainRequest } from "@vercel/sdk/models/renewdomainop.js";

let value: RenewDomainRequest = {
  domain: "fatherly-ad.info",
  requestBody: {
    years: 6227.86,
    expectedPrice: 3189.85,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `domain`                                                             | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `requestBody`                                                        | [models.RenewDomainRequestBody](../models/renewdomainrequestbody.md) | :heavy_check_mark:                                                   | N/A                                                                  |