# GetTldPriceResponseBody

Success

## Example Usage

```typescript
import { GetTldPriceResponseBody } from "@vercel/sdk/models/gettldpriceop.js";

let value: GetTldPriceResponseBody = {
  years: 1341.28,
  purchasePrice: 8116.17,
  renewalPrice: 5324.89,
  transferPrice: 2602.11,
};
```

## Fields

| Field                                                                                                                                                                   | Type                                                                                                                                                                    | Required                                                                                                                                                                | Description                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `years`                                                                                                                                                                 | *number*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                      | The number of years the returned price is for.                                                                                                                          |
| `purchasePrice`                                                                                                                                                         | *number*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                      | The base TLD price for purchasing a domain for the given number of years. If null, the TLD does not support purchasing domains for the given number of years.           |
| `renewalPrice`                                                                                                                                                          | *number*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                      | The base TLD price for renewing a domain for the given number of years. If null, the TLD does not support renewing domains for the given number of years.               |
| `transferPrice`                                                                                                                                                         | *number*                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                      | The base TLD price for transferring a domain in for the given number of years. If null, the TLD does not support transferring domains in for the given number of years. |