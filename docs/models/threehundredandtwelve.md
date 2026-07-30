# ThreeHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwelve } from "@vercel/sdk/models/twohundredandeightysix.js";

let value: ThreeHundredAndTwelve = {
  budget: {
    type: "fixed",
    fixedBudget: 3731.75,
    previousSpend: [
      4404.26,
      6928.06,
    ],
    notifiedAt: [
      1336.69,
      8864.72,
    ],
    createdAt: 3041.11,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload312Budget](../models/usereventpayload312budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |