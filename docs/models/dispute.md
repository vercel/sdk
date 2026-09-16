# Dispute

The dispute details, if any.

## Example Usage

```typescript
import { Dispute } from "@vercel/sdk/models/buycreditsop.js";

let value: Dispute = {
  amount: "80.77",
  createdAt: "1706279156888",
  currency: "North Korean Won",
  id: "<id>",
  providerId: "<id>",
  reason: "<value>",
  status: "<value>",
  updatedAt: "1735675675473",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `amount`                                                   | *string*                                                   | :heavy_check_mark:                                         | The disputed amount.                                       |
| `createdAt`                                                | *string*                                                   | :heavy_check_mark:                                         | When the dispute was first recorded.                       |
| `currency`                                                 | *string*                                                   | :heavy_check_mark:                                         | The dispute currency.                                      |
| `id`                                                       | *string*                                                   | :heavy_check_mark:                                         | The unique ID of the dispute entity.                       |
| `providerId`                                               | *string*                                                   | :heavy_check_mark:                                         | The external provider dispute ID (e.g. Stripe dispute ID). |
| `reason`                                                   | *string*                                                   | :heavy_check_mark:                                         | The dispute reason.                                        |
| `status`                                                   | *string*                                                   | :heavy_check_mark:                                         | The dispute status.                                        |
| `updatedAt`                                                | *string*                                                   | :heavy_check_mark:                                         | When the dispute was last updated.                         |