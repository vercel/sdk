# Events

## Example Usage

```typescript
import { Events } from "@vercel/sdk/models/fourhundredandfourteen.js";

let value: Events = {
  cacheCreationInputTokens: 8264.37,
  cacheReadInputTokens: 921.19,
  eventId: "<id>",
  inputTokens: 4741.19,
  modelId: "<id>",
  outputTokens: 6106.82,
  timestamp: "<value>",
  totalTokens: 9845.35,
};
```

## Fields

| Field                      | Type                       | Required                   | Description                |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `cacheCreationInputTokens` | *number*                   | :heavy_check_mark:         | N/A                        |
| `cacheReadInputTokens`     | *number*                   | :heavy_check_mark:         | N/A                        |
| `eventId`                  | *string*                   | :heavy_check_mark:         | N/A                        |
| `inputTokens`              | *number*                   | :heavy_check_mark:         | N/A                        |
| `modelId`                  | *string*                   | :heavy_check_mark:         | N/A                        |
| `outputTokens`             | *number*                   | :heavy_check_mark:         | N/A                        |
| `timestamp`                | *string*                   | :heavy_check_mark:         | N/A                        |
| `totalTokens`              | *number*                   | :heavy_check_mark:         | N/A                        |