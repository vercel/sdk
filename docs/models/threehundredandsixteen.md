# ThreeHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixteen } from "@vercel/sdk/models/ssoprotectiondeploymenttype.js";

let value: ThreeHundredAndSixteen = {
  budget: {
    type: "fixed",
    fixedBudget: 9734.41,
    previousSpend: [
      3589.85,
      1456.2,
    ],
    notifiedAt: [
      5887.25,
      1508.48,
      987.93,
    ],
    createdAt: 8363.55,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `budget`                                                                   | [models.UserEventPayload316Budget](../models/usereventpayload316budget.md) | :heavy_check_mark:                                                         | Represents a budget for tracking and notifying teams on their spending.    |
| `webhookUrl`                                                               | *string*                                                                   | :heavy_minus_sign:                                                         | N/A                                                                        |