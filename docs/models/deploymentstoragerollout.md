# DeploymentStorageRollout

Phase 2 Pro deployment-storage pricing rollout cohort and milestones. Absent when the team is not in a Phase 2 Pro cohort.

## Example Usage

```typescript
import { DeploymentStorageRollout } from "@vercel/sdk/models/team.js";

let value: DeploymentStorageRollout = {
  cohort: "low",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `cohort`                                                            | [models.Cohort](../models/cohort.md)                                | :heavy_check_mark:                                                  | N/A                                                                 |
| `meteredAt`                                                         | *number*                                                            | :heavy_minus_sign:                                                  | When team-wide metering was recorded for this rollout.              |
| `meterReason`                                                       | [models.MeterReason](../models/meterreason.md)                      | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retentionAppliedAt`                                                | *number*                                                            | :heavy_minus_sign:                                                  | When the calendar retention-reduce migration applied 30d retention. |
| `retentionOptOutAt`                                                 | *number*                                                            | :heavy_minus_sign:                                                  | When the customer chose "keep my retention" before reduce day.      |