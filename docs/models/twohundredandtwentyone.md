# TwoHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyOne } from "@vercel/sdk/models/usereventfactors1.js";

let value: TwoHundredAndTwentyOne = {
  budget: {
    type: "fixed",
    fixedBudget: 7704.88,
    previousSpend: [
      6201.61,
    ],
    notifiedAt: [],
    createdAt: 1923.71,
    isActive: false,
    teamId: "<id>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `budget`                                                                | [models.PayloadBudget](../models/payloadbudget.md)                      | :heavy_check_mark:                                                      | Represents a budget for tracking and notifying teams on their spending. |