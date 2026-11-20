# EightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyEight } from "@vercel/sdk/models/usereventpayloadresources.js";

let value: EightyEight = {
  amount: 9902.77,
  invoiceId: "<id>",
  lineItemCount: 6783.83,
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