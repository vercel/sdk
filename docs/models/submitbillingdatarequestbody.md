# SubmitBillingDataRequestBody

## Example Usage

```typescript
import { SubmitBillingDataRequestBody } from "@vercel/sdk/models/submitbillingdataop.js";

let value: SubmitBillingDataRequestBody = {
  timestamp: new Date("2023-12-12T17:59:43.779Z"),
  eod: new Date("2024-10-19T03:23:15.846Z"),
  period: {
    start: new Date("2024-04-16T11:28:38.206Z"),
    end: new Date("2025-09-23T08:46:33.172Z"),
  },
  billing: [
    {
      billingPlanId: "<id>",
      name: "<value>",
      price: "698.09",
      quantity: 2019.66,
      units: "<value>",
      total: "<value>",
    },
  ],
  usage: [
    {
      resourceId: "<id>",
      name: "<value>",
      type: "rate",
      units: "<value>",
      dayValue: 7791.54,
      periodValue: 4905.49,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `eod`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `period`                                                                                      | [models.Period](../models/period.md)                                                          | :heavy_check_mark:                                                                            | Period for the billing cycle.                                                                 |
| `billing`                                                                                     | *models.SubmitBillingDataBilling*                                                             | :heavy_check_mark:                                                                            | Billing data (interim invoicing data).                                                        |
| `usage`                                                                                       | [models.Usage](../models/usage.md)[]                                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |