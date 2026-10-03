# Seventy

The payload of the event, if requested.

## Example Usage

```typescript
import { Seventy } from "@vercel/sdk/models/fiftyeight.js";

let value: Seventy = {
  amount: 6263.19,
  invoiceId: "<id>",
  lineItemCount: 3188.99,
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