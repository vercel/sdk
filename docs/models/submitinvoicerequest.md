# SubmitInvoiceRequest

## Example Usage

```typescript
import { SubmitInvoiceRequest } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoiceRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    invoiceDate: new Date("2023-09-19T15:47:11.283Z"),
    period: {
      start: new Date("2025-10-31T10:26:27.251Z"),
      end: new Date("2025-01-22T17:08:58.929Z"),
    },
    items: [
      {
        billingPlanId: "<id>",
        name: "<value>",
        price: "288.29",
        quantity: 9747.75,
        units: "<value>",
        total: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `integrationConfigurationId`                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `requestBody`                                                            | [models.SubmitInvoiceRequestBody](../models/submitinvoicerequestbody.md) | :heavy_check_mark:                                                       | N/A                                                                      |