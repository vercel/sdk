# OverageMetadata

Contains the timestamps for usage summary emails.

## Example Usage

```typescript
import { OverageMetadata } from "@vercel/sdk/models/userevent.js";

let value: OverageMetadata = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `firstTimeOnDemandNotificationSentAt`                           | *number*                                                        | :heavy_minus_sign:                                              | Tracks if the first time on-demand overage email has been sent. |
| `overageSummaryEmailSentAt`                                     | *number*                                                        | :heavy_minus_sign:                                              | Tracks the last time we sent a summary email.                   |