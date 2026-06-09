# TwoHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventy } from "@vercel/sdk/models/twohundredandthirtyone.js";

let value: TwoHundredAndSeventy = {
  budget: {
    type: "fixed",
    fixedBudget: 96.16,
    previousSpend: [
      8155.95,
      4158.2,
    ],
    notifiedAt: [
      6022.71,
      7738.24,
    ],
    createdAt: 27.33,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload270Budget](../models/usereventpayload270budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |