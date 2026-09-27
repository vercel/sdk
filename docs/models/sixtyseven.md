# SixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySeven } from "@vercel/sdk/models/fiftyfour.js";

let value: SixtySeven = {
  amount: 5488.88,
  invoiceId: "<id>",
  lineItemCount: 5954.02,
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