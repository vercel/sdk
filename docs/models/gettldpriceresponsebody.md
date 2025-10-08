# GetTldPriceResponseBody

Success

## Example Usage

```typescript
import { GetTldPriceResponseBody } from "@vercel/sdk/models/gettldpriceop.js";

let value: GetTldPriceResponseBody = {
  years: 1341.28,
  purchasePrice: 6555.58,
  renewalPrice: 8116.17,
  transferPrice: 1981.19,
};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `years`                                                                                                                                                       | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The number of years the returned price is for.                                                                                                                |
| `purchasePrice`                                                                                                                                               | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The base TLD price for purchasing a domain for the given number of years. If null, the TLD does not support purchasing domains for the given number of years. |
| `renewalPrice`                                                                                                                                                | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The base TLD price for purchasing a domain for the given number of years. If null, the TLD does not support purchasing domains for the given number of years. |
| `transferPrice`                                                                                                                                               | *number*                                                                                                                                                      | :heavy_check_mark:                                                                                                                                            | The base TLD price for purchasing a domain for the given number of years. If null, the TLD does not support purchasing domains for the given number of years. |