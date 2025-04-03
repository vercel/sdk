# PayloadWebAnalytics

## Example Usage

```typescript
import { PayloadWebAnalytics } from "@vercel/sdk/models/userevent.js";

let value: PayloadWebAnalytics = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `updatedAt`                                    | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `blockedFrom`                                  | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `blockedUntil`                                 | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `blockReason`                                  | [models.BlockReason](../models/blockreason.md) | :heavy_minus_sign:                             | N/A                                            |
| `graceEmailSentAt`                             | *number*                                       | :heavy_minus_sign:                             | N/A                                            |