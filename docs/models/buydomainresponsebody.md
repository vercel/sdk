# BuyDomainResponseBody

## Example Usage

```typescript
import { BuyDomainResponseBody } from "@vercel/sdk/models/buydomainop.js";

let value: BuyDomainResponseBody = {
  domain: {
    uid: "<id>",
    ns: [
      "<value>",
    ],
    verified: false,
    created: 7845.41,
    pending: false,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `domain`                                                             | [models.BuyDomainDomainsDomain](../models/buydomaindomainsdomain.md) | :heavy_check_mark:                                                   | N/A                                                                  |