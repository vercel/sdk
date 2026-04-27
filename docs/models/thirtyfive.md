# ThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyFive } from "@vercel/sdk/models/payload1.js";

let value: ThirtyFive = {
  invoiceId: "<id>",
  amount: 8419.89,
  refundReason: "<value>",
  lineItemCount: 1775.21,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `refundReason`     | *string*           | :heavy_check_mark: | N/A                |
| `lineItemCount`    | *number*           | :heavy_check_mark: | N/A                |