# SubmitInvoicePeriod

Subscription period for this billing cycle.

## Example Usage

```typescript
import { SubmitInvoicePeriod } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoicePeriod = {
  start: new Date("2023-05-26T22:19:48.108Z"),
  end: new Date("2025-10-02T23:49:35.521Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |