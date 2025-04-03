# SubmitBillingDataRequest

## Example Usage

```typescript
import { SubmitBillingDataRequest } from "@vercel/sdk/models/submitbillingdataop.js";

let value: SubmitBillingDataRequest = {
  integrationConfigurationId: "<id>",
  requestBody: {
    timestamp: new Date("2024-10-29T13:13:20.385Z"),
    eod: new Date("2023-07-22T12:18:37.499Z"),
    period: {
      start: new Date("2025-04-09T09:57:44.993Z"),
      end: new Date("2023-03-28T13:55:02.287Z"),
    },
    billing: {
      items: [
        {
          billingPlanId: "<id>",
          name: "<value>",
          price: "468.79",
          quantity: 4325.97,
          units: "<value>",
          total: "<value>",
        },
      ],
    },
    usage: [
      {
        name: "<value>",
        type: "interval",
        units: "<value>",
        dayValue: 944.87,
        periodValue: 3062.69,
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