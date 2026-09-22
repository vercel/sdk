# SixtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFour } from "@vercel/sdk/models/usereventpayloadaccessgroup.js";

let value: SixtyFour = {
  amount: 8811.16,
  invoiceId: "<id>",
  lineItemCount: 2580.69,
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