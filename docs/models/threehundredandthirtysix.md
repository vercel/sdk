# ThreeHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtySix } from "@vercel/sdk/models/usereventpayload334budget.js";

let value: ThreeHundredAndThirtySix = {
  budget: {
    type: "fixed",
    fixedBudget: 1629.77,
    previousSpend: [
      9819.57,
      7061.63,
    ],
    notifiedAt: [
      4312.77,
      7366.36,
      8531.13,
    ],
    createdAt: 707.81,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload336Budget](../models/usereventpayload336budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |