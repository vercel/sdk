# SixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyOne } from "@vercel/sdk/models/piiredaction.js";

let value: SixtyOne = {
  invoiceId: "<id>",
  amount: 3367.7,
  refundReason: "<value>",
  lineItemCount: 1846.17,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `refundReason`     | *string*           | :heavy_check_mark: | N/A                |
| `lineItemCount`    | *number*           | :heavy_check_mark: | N/A                |