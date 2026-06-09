# FortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFour } from "@vercel/sdk/models/userevent.js";

let value: FortyFour = {
  invoiceId: "<id>",
  amount: 6506.92,
  refundReason: "<value>",
  lineItemCount: 8113.89,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `refundReason`     | *string*           | :heavy_check_mark: | N/A                |
| `lineItemCount`    | *number*           | :heavy_check_mark: | N/A                |