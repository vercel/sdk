# SubmitBillingDataRequest

## Example Usage

```typescript
import { SubmitBillingDataRequest } from "@vercel/sdk/models/submitbillingdataop.js";

let value: SubmitBillingDataRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    timestamp: new Date("2025-03-06T23:06:11.778Z"),
    eod: new Date("2024-06-04T11:01:30.776Z"),
    period: {
      start: new Date("2025-09-17T20:09:09.916Z"),
      end: new Date("2023-02-08T14:25:18.262Z"),
    },
    billing: [
      {
        billingPlanId: "<id>",
        name: "<value>",
        price: "339.10",
        quantity: 3502.02,
        units: "<value>",
        total: "<value>",
      },
    ],
    usage: [
      {
        name: "<value>",
        type: "total",
        units: "<value>",
        dayValue: 618.89,
        periodValue: 8213.04,
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