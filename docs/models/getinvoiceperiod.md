# GetInvoicePeriod

Subscription period for this billing cycle. ISO 8601 timestamps.

## Example Usage

```typescript
import { GetInvoicePeriod } from "@vercel/sdk/models/getinvoiceop.js";

let value: GetInvoicePeriod = {
  end: "<value>",
  start: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `end`              | *string*           | :heavy_check_mark: | N/A                |
| `start`            | *string*           | :heavy_check_mark: | N/A                |