# PayloadWebAnalytics

## Example Usage

```typescript
import { PayloadWebAnalytics } from "@vercel/sdk/models/oldteam.js";

let value: PayloadWebAnalytics = {
  updatedAt: 1881.72,
  blockReason: "limits_exceeded",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `updatedAt`                                    | *number*                                       | :heavy_check_mark:                             | N/A                                            |
| `blockedFrom`                                  | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `blockedUntil`                                 | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `blockReason`                                  | [models.BlockReason](../models/blockreason.md) | :heavy_check_mark:                             | N/A                                            |
| `graceEmailSentAt`                             | *number*                                       | :heavy_minus_sign:                             | N/A                                            |