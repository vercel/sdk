# UpsertAiGatewayBudgetRefreshPeriod

Defaults to monthly with `limitAmount`; `increaseBy` keeps the current period. Ignored for a member's own change that lapses (`expiresAt`): it takes the user default's period.

## Example Usage

```typescript
import { UpsertAiGatewayBudgetRefreshPeriod } from "@vercel/sdk/models/upsertaigatewaybudgetop.js";

let value: UpsertAiGatewayBudgetRefreshPeriod = "daily";
```

## Values

```typescript
"daily" | "weekly" | "monthly" | "none"
```