# FortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyNine } from "@vercel/sdk/models/userevent.js";

let value: FortyNine = {
  invoiceId: "<id>",
  amount: 8401.55,
  refundReason: "<value>",
  lineItemCount: 4675.32,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `refundReason`     | *string*           | :heavy_check_mark: | N/A                |
| `lineItemCount`    | *number*           | :heavy_check_mark: | N/A                |