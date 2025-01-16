# SubmitBillingDataRequest

## Example Usage

```typescript
import { SubmitBillingDataRequest } from "@vercel/sdk/models/submitbillingdataop.js";

let value: SubmitBillingDataRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    timestamp: new Date("2024-10-30T05:11:34.005Z"),
    eod: new Date("2023-08-22T02:23:53.093Z"),
    period: {
      start: new Date("2024-06-06T08:51:38.406Z"),
      end: new Date("2023-05-03T19:56:19.516Z"),
    },
    billing: [
      {
        billingPlanId: "<id>",
        name: "<value>",
        price: "285.44",
        quantity: 1812.67,
        units: "<value>",
        total: "<value>",
      },
    ],
    usage: [
      {
        resourceId: "<id>",
        name: "<value>",
        type: "interval",
        units: "<value>",
        dayValue: 6155.97,
        periodValue: 9465.58,
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