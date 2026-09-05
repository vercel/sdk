# SpeedInsightsFreeUsageAlert

Tracks notifications sent for the team-wide Speed Insights free allocation. The allocation is measured over a rolling window (not a billing period), so deduplication is time-based rather than reset at period start.

## Example Usage

```typescript
import { SpeedInsightsFreeUsageAlert } from "@vercel/sdk/models/payloadpreviousrule.js";

let value: SpeedInsightsFreeUsageAlert = {
  currentThreshold: 423.2,
  notifiedAt: 9629.5,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `currentThreshold`                                                 | *number*                                                           | :heavy_check_mark:                                                 | Highest allocation percentage threshold notified (e.g. 75 or 100). |
| `notifiedAt`                                                       | *number*                                                           | :heavy_check_mark:                                                 | When the notification for `currentThreshold` was sent.             |