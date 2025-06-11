# BuyDomainResponseBody

## Example Usage

```typescript
import { BuyDomainResponseBody } from "@vercel/sdk/models/buydomainop.js";

let value: BuyDomainResponseBody = {
  domain: {
    uid: "<id>",
    ns: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    verified: true,
    created: 5744.85,
    pending: false,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `domain`                                                             | [models.BuyDomainDomainsDomain](../models/buydomaindomainsdomain.md) | :heavy_check_mark:                                                   | N/A                                                                  |