# SubmitInvoiceRequest

## Example Usage

```typescript
import { SubmitInvoiceRequest } from "@vercel/sdk/models/submitinvoiceop.js";

let value: SubmitInvoiceRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    invoiceDate: new Date("2025-11-12T23:18:06.558Z"),
    period: {
      start: new Date("2025-10-21T11:00:17.650Z"),
      end: new Date("2025-12-04T19:43:42.837Z"),
    },
    items: [],
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `integrationConfigurationId`                                             | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `requestBody`                                                            | [models.SubmitInvoiceRequestBody](../models/submitinvoicerequestbody.md) | :heavy_check_mark:                                                       | N/A                                                                      |