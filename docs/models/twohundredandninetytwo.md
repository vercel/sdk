# TwoHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyTwo } from "@vercel/sdk/models/twohundredandfiftyeight.js";

let value: TwoHundredAndNinetyTwo = {
  budget: {
    type: "fixed",
    fixedBudget: 3709.71,
    previousSpend: [
      6042.4,
      2713.75,
      9518.81,
    ],
    notifiedAt: [
      386.32,
      673.14,
    ],
    createdAt: 9113.25,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload292Budget](../models/usereventpayload292budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |