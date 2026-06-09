# UserEventPayload269Budget

Represents a budget for tracking and notifying teams on their spending.

## Example Usage

```typescript
import { UserEventPayload269Budget } from "@vercel/sdk/models/twohundredandthirtyone.js";

let value: UserEventPayload269Budget = {
  type: "fixed",
  fixedBudget: 7832.88,
  previousSpend: [
    3302.22,
    1011.06,
  ],
  notifiedAt: [],
  createdAt: 9923.45,
  isActive: true,
  teamId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [models.UserEventPayload269Type](../models/usereventpayload269type.md) | :heavy_check_mark:                                                     | The budget type                                                        |
| `fixedBudget`                                                          | *number*                                                               | :heavy_check_mark:                                                     | Budget amount (USD / dollars)                                          |
| `previousSpend`                                                        | *number*[]                                                             | :heavy_check_mark:                                                     | Array of the last 3 months of spend data                               |
| `notifiedAt`                                                           | *number*[]                                                             | :heavy_check_mark:                                                     | Array of 50, 75, 100 to keep track of notifications sent out           |
| `webhookId`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | Webhook id that corresponds to a webhook in Cosmos webhook collection  |
| `webhookNotified`                                                      | *boolean*                                                              | :heavy_minus_sign:                                                     | Keep track if the webhook has been called for the month                |
| `createdAt`                                                            | *number*                                                               | :heavy_check_mark:                                                     | Date time when budget is created                                       |
| `updatedAt`                                                            | *number*                                                               | :heavy_minus_sign:                                                     | Date time when budget is updated last                                  |
| `isActive`                                                             | *boolean*                                                              | :heavy_check_mark:                                                     | Is the budget currently active for a customer                          |
| `pauseProjects`                                                        | *boolean*                                                              | :heavy_minus_sign:                                                     | Should all projects be paused if budget is exceeded                    |
| `pricingPlan`                                                          | [models.PricingPlan](../models/pricingplan.md)                         | :heavy_minus_sign:                                                     | The acive pricing plan the team is billed with                         |
| `teamId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | Partition key                                                          |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Sort key that needs to be unique per teamId                            |