# BuyDomainDomainsResponseBody

## Example Usage

```typescript
import { BuyDomainDomainsResponseBody } from "@vercel/sdk/models/buydomainop.js";

let value: BuyDomainDomainsResponseBody = {
  domain: {
    uid: "<id>",
    ns: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    verified: true,
    created: 5607.88,
    pending: false,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `domain`                                               | [models.BuyDomainDomain](../models/buydomaindomain.md) | :heavy_check_mark:                                     | N/A                                                    |