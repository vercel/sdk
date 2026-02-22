# OneHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventy } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: OneHundredAndSeventy = {
  budget: {
    type: "fixed",
    fixedBudget: 4888.49,
    previousSpend: [
      1722.11,
      2468.87,
      4280.1,
    ],
    notifiedAt: [
      9830.04,
    ],
    createdAt: 9116.39,
    isActive: true,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budget`                                                                | [models.UserEventPayloadBudget](../models/usereventpayloadbudget.md)    | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |
| `webhookUrl`                                                            | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |