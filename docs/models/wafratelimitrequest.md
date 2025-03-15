# WafRateLimitRequest

## Example Usage

```typescript
import { WafRateLimitRequest } from "@vercel/sdk/models/userevent.js";

let value: WafRateLimitRequest = {
  currentThreshold: 4473.23,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |