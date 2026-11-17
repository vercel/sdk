# ThreeHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyFive } from "@vercel/sdk/models/threehundredandfour.js";

let value: ThreeHundredAndFiftyFive = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `budgetId`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | The budget that paused the project, for `BUDGET_REACHED`. Absent on older events.    |
| `budgetScope`                                                                        | [models.BudgetScope](../models/budgetscope.md)                                       | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `projectId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `projectName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Display name for Activity links. Optional for events stored before it was published. |
| `reasonCode`                                                                         | [models.ReasonCode](../models/reasoncode.md)                                         | :heavy_minus_sign:                                                                   | N/A                                                                                  |