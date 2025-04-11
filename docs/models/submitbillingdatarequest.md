# SubmitBillingDataRequest

## Example Usage

```typescript
import { SubmitBillingDataRequest } from "@vercel/sdk/models/submitbillingdataop.js";

let value: SubmitBillingDataRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    timestamp: new Date("2023-01-02T00:26:27.204Z"),
    eod: new Date("2025-05-30T03:47:49.560Z"),
    period: {
      start: new Date("2023-02-20T12:37:57.468Z"),
      end: new Date("2024-04-08T05:31:29.801Z"),
    },
    billing: [
      {
        billingPlanId: "<id>",
        name: "<value>",
        price: "650.49",
        quantity: 4163.3,
        units: "<value>",
        total: "<value>",
      },
    ],
    usage: [
      {
        name: "<value>",
        type: "total",
        units: "<value>",
        dayValue: 8589.98,
        periodValue: 2023.16,
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `integrationConfigurationId`                                                     | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `requestBody`                                                                    | [models.SubmitBillingDataRequestBody](../models/submitbillingdatarequestbody.md) | :heavy_check_mark:                                                               | N/A                                                                              |