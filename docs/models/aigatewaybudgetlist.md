# AiGatewayBudgetList

## Example Usage

```typescript
import { AiGatewayBudgetList } from "@vercel/sdk/models/aigatewaybudgetlist.js";

let value: AiGatewayBudgetList = {
  budgets: [],
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `budgets`                                                                                                                                                        | [models.AiGatewayBudget](../models/aigatewaybudget.md)[]                                                                                                         | :heavy_check_mark:                                                                                                                                               | N/A                                                                                                                                                              |
| `defaultCoveredCounts`                                                                                                                                           | [models.DefaultCoveredCounts](../models/defaultcoveredcounts.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                               | Paged requests only: `source: 'default'` rows per scope type across the whole `scopeType`-filtered list, independent of the page and of `includeDefaultCovered`. |
| `nextCursor`                                                                                                                                                     | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Paged requests only (`limit` or `cursor` set): pass as `cursor` to read the next page; null on the last page.                                                    |