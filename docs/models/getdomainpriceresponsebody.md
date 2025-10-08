# GetDomainPriceResponseBody

Success

## Example Usage

```typescript
import { GetDomainPriceResponseBody } from "@vercel/sdk/models/getdomainpriceop.js";

let value: GetDomainPriceResponseBody = {
  years: 6336.28,
  purchasePrice: null,
  renewalPrice: null,
  transferPrice: 2910.01,
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `years`                                                                                                                                              | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `purchasePrice`                                                                                                                                      | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The price for purchasing this domain for the given number of years. If null, the domain is not available for purchase for the given number of years. |
| `renewalPrice`                                                                                                                                       | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The price for renewing this domain for the given number of years. If null, the domain cannot be renewed for the given number of years.               |
| `transferPrice`                                                                                                                                      | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The price for transferring this domain in for the given number of years. If null, the domain cannot be transferred in for the given number of years. |