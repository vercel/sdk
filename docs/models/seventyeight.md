# SeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyEight } from "@vercel/sdk/models/usereventpayload26apikey.js";

let value: SeventyEight = {
  amount: 9969.53,
  invoiceId: "<id>",
  lineItemCount: 9651.51,
  refundReason: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `lineItemCount`    | *number*           | :heavy_check_mark: | N/A                |
| `refundReason`     | *string*           | :heavy_check_mark: | N/A                |