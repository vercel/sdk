# GetDomainPriceResponseBody

Success

## Example Usage

```typescript
import { GetDomainPriceResponseBody } from "@vercel/sdk/models/getdomainpriceop.js";

let value: GetDomainPriceResponseBody = {
  years: 6336.28,
  purchasePrice: 724.81,
  renewalPrice: 546.91,
  transferPrice: 3565.55,
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `years`                                                                                                                                                       | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | N/A                                                                                                                                                           |
| `purchasePrice`                                                                                                                                               | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The base TLD price for purchasing a domain for the given number of years. If null, the TLD does not support purchasing domains for the given number of years. |
| `renewalPrice`                                                                                                                                                | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The base TLD price for purchasing a domain for the given number of years. If null, the TLD does not support purchasing domains for the given number of years. |
| `transferPrice`                                                                                                                                               | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The base TLD price for purchasing a domain for the given number of years. If null, the TLD does not support purchasing domains for the given number of years. |