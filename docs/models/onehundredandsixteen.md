# OneHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSixteen = {
  budget: {
    type: "fixed",
    fixedBudget: 3966.63,
    previousSpend: [
      5223.53,
      8530.42,
      328.45,
    ],
    notifiedAt: [
      5112.1,
    ],
    createdAt: 9285.86,
    isActive: false,
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