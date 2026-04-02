# ThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyThree } from "@vercel/sdk/models/userevent.js";

let value: ThirtyThree = {
  invoiceId: "<id>",
  amount: 5339.64,
  refundReason: "<value>",
  lineItemCount: 2465.64,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `refundReason`     | *string*           | :heavy_check_mark: | N/A                |
| `lineItemCount`    | *number*           | :heavy_check_mark: | N/A                |