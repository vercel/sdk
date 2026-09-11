# SixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyTwo } from "@vercel/sdk/models/payloadrule.js";

let value: SixtyTwo = {
  invoiceId: "<id>",
  amount: 8618.72,
  refundReason: "<value>",
  lineItemCount: 7262.77,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `invoiceId`        | *string*           | :heavy_check_mark: | N/A                |
| `amount`           | *number*           | :heavy_check_mark: | N/A                |
| `refundReason`     | *string*           | :heavy_check_mark: | N/A                |
| `lineItemCount`    | *number*           | :heavy_check_mark: | N/A                |