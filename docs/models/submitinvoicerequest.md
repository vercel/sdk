# SubmitInvoiceRequest

## Example Usage

```typescript
import { SubmitInvoiceRequest } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoiceRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    invoiceDate: new Date("2024-11-12T23:18:06.558Z"),
    period: {
      start: new Date("2023-11-17T01:12:51.321Z"),
      end: new Date("2025-11-16T06:04:23.394Z"),
    },
    items: [
      {
        billingPlanId: "<id>",
        name: "<value>",
        price: "18.39",
        quantity: 7731.8,
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