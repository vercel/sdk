# Eighty

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighty } from "@vercel/sdk/models/rule.js";

let value: Eighty = {
  amount: 8537.76,
  invoiceId: "<id>",
  lineItemCount: 7344.14,
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