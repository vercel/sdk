# SixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyThree } from "@vercel/sdk/models/thirtythree.js";

let value: SixtyThree = {
  invoiceId: "<id>",
  amount: 8100.92,
  refundReason: "<value>",
  lineItemCount: 2170.96,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `refundReason`     | *string*           | :heavy_check_mark: | N/A                |
| `lineItemCount`    | *number*           | :heavy_check_mark: | N/A                |