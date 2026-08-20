# Sixty

The payload of the event, if requested.

## Example Usage

```typescript
import { Sixty } from "@vercel/sdk/models/eighteen.js";

let value: Sixty = {
  invoiceId: "<id>",
  amount: 3104.01,
  refundReason: "<value>",
  lineItemCount: 5742.5,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `refundReason`     | *string*           | :heavy_check_mark: | N/A                |
| `lineItemCount`    | *number*           | :heavy_check_mark: | N/A                |