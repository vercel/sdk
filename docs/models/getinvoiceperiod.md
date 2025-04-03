# GetInvoicePeriod

Subscription period for this billing cycle. ISO 8601 timestamps.

## Example Usage

```typescript
import { GetInvoicePeriod } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoicePeriod = {
  start: "<value>",
  end: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `start`            | *string*           | :heavy_check_mark: | N/A                |
| `end`              | *string*           | :heavy_check_mark: | N/A                |