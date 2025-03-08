# SubmitInvoicePeriod

Subscription period for this billing cycle.

## Example Usage

```typescript
import { SubmitInvoicePeriod } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoicePeriod = {
  start: new Date("2024-02-21T02:44:46.039Z"),
  end: new Date("2024-09-18T10:03:22.825Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |