# TwoHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwenty } from "@vercel/sdk/models/twohundredandfourteen.js";

let value: TwoHundredAndTwenty = {
  budget: {
    type: "fixed",
    fixedBudget: 7899.38,
    previousSpend: [
      9525.16,
      6702.05,
      4940.81,
    ],
    notifiedAt: [
      6624.74,
      5247.25,
      1507.18,
    ],
    createdAt: 1277.38,
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