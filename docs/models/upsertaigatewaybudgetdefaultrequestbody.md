# UpsertAiGatewayBudgetDefaultRequestBody

## Example Usage

```typescript
import { UpsertAiGatewayBudgetDefaultRequestBody } from "@vercel/sdk/models/upsertaigatewaybudgetdefaultop.js";

let value: UpsertAiGatewayBudgetDefaultRequestBody = {
  scopeType: "user",
  limitAmount: 8745.95,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `scopeType`                                                                                                | [models.UpsertAiGatewayBudgetDefaultScopeType](../models/upsertaigatewaybudgetdefaultscopetype.md)         | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `limitAmount`                                                                                              | *number*                                                                                                   | :heavy_check_mark:                                                                                         | Default budget limit in dollars.                                                                           |
| `refreshPeriod`                                                                                            | [models.UpsertAiGatewayBudgetDefaultRefreshPeriod](../models/upsertaigatewaybudgetdefaultrefreshperiod.md) | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `alertThresholds`                                                                                          | *number*[]                                                                                                 | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |
| `justification`                                                                                            | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Why the budget is being changed, up to 500 characters. Recorded in the activity log and audit log drains.  |