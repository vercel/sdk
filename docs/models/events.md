# Events

## Example Usage

```typescript
import { Events } from "@vercel/sdk/models/threehundredandthirtyseven.js";

let value: Events = {
  eventId: "<id>",
  modelId: "<id>",
  inputTokens: 8264.37,
  outputTokens: 921.19,
  totalTokens: 4741.19,
  cacheCreationInputTokens: 6106.82,
  cacheReadInputTokens: 9845.35,
  timestamp: "<value>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `eventId`                  | *string*                   | :heavy_check_mark:         | N/A                        |
| `modelId`                  | *string*                   | :heavy_check_mark:         | N/A                        |
| `inputTokens`              | *number*                   | :heavy_check_mark:         | N/A                        |
| `outputTokens`             | *number*                   | :heavy_check_mark:         | N/A                        |
| `totalTokens`              | *number*                   | :heavy_check_mark:         | N/A                        |
| `cacheCreationInputTokens` | *number*                   | :heavy_check_mark:         | N/A                        |
| `cacheReadInputTokens`     | *number*                   | :heavy_check_mark:         | N/A                        |
| `timestamp`                | *string*                   | :heavy_check_mark:         | N/A                        |