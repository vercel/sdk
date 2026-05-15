# FortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyOne } from "@vercel/sdk/models/before.js";

let value: FortyOne = {
  invoiceId: "<id>",
  amount: 7038.08,
  refundReason: "<value>",
  lineItemCount: 9155.7,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `refundReason`     | *string*           | :heavy_check_mark: | N/A                |
| `lineItemCount`    | *number*           | :heavy_check_mark: | N/A                |