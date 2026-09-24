# ScheduledBlock

Since June 2026. A hard block that is scheduled (the delay varies by source; see `executeAt`) but not yet executed. Powers admin visibility, scheduler dedup, and cancellation. Cleared on execution or when the team is unblocked/reviewed before `executeAt`; the executor treats its absence as "block cancelled".

## Example Usage

```typescript
import { ScheduledBlock } from "@vercel/sdk/models/sourceimages.js";

let value: ScheduledBlock = {
  createdAt: 9648.38,
  executeAt: 4491.66,
  reason: "<value>",
  source: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `caseId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Absent from the automated evaluation path, which has no case.               |
| `createdAt`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | Unix ms timestamp of when the marker was written.                           |
| `executeAt`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | Unix ms timestamp of the scheduled EventBridge execution.                   |
| `reason`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | Violation reason (string value of the `Violation` enum).                    |
| `scheduleName`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | EventBridge schedule name, persisted so the pending event can be cancelled. |
| `source`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | What triggered the scheduled block (string value of `TeamBlockSource`).     |