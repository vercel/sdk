# EightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyNine } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: EightyNine = {
  amount: 3127.76,
  invoiceId: "<id>",
  lineItemCount: 1187.16,
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