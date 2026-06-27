# ScheduledBlock

Since June 2026. A hard block that is scheduled (the delay varies by source; see `executeAt`) but not yet executed. Powers admin visibility, scheduler dedup, and cancellation. Cleared on execution or when the team is unblocked/reviewed before `executeAt`; the executor treats its absence as "block cancelled".

## Example Usage

```typescript
import { ScheduledBlock } from "@vercel/sdk/models/payloadteamroles.js";

let value: ScheduledBlock = {
  executeAt: 9648.38,
  reason: "<value>",
  source: "<value>",
  createdAt: 4491.66,
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `executeAt`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | Unix ms timestamp of the scheduled EventBridge execution.                   |
| `reason`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | Violation reason (string value of the `Violation` enum).                    |
| `source`                                                                    | *string*                                                                    | :heavy_check_mark:                                                          | What triggered the scheduled block (string value of `TeamBlockSource`).     |
| `createdAt`                                                                 | *number*                                                                    | :heavy_check_mark:                                                          | Unix ms timestamp of when the marker was written.                           |
| `caseId`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Absent from the automated evaluation path, which has no case.               |
| `scheduleName`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | EventBridge schedule name, persisted so the pending event can be cancelled. |