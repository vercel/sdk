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
| `years`                                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | The number of years to renew the domain for.                                       |
| `expectedPrice`                                                                    | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `contactInformation`                                                               | [models.RenewDomainContactInformation](../models/renewdomaincontactinformation.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |