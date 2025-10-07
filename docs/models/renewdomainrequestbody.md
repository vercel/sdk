# RenewDomainRequestBody

## Example Usage

```typescript
import { RenewDomainRequestBody } from "@vercel/sdk/models/renewdomainop.js";

let value: RenewDomainRequestBody = {
  years: 4900.82,
  expectedPrice: 546.09,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `years`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `expectedPrice`                                                                    | *number*                                                                           | :heavy_check_mark:                                                                 | Represents a monetary amount in USD dollars                                        |
| `contactInformation`                                                               | [models.RenewDomainContactInformation](../models/renewdomaincontactinformation.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |