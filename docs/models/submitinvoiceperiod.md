# SubmitInvoicePeriod

Subscription period for this billing cycle.

## Example Usage

```typescript
import { SubmitInvoicePeriod } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoicePeriod = {
  start: new Date("2023-04-03T11:32:44.508Z"),
  end: new Date("2025-04-19T03:10:20.338Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `start`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `end`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |