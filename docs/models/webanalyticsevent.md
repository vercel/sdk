# WebAnalyticsEvent

## Example Usage

```typescript
import { WebAnalyticsEvent } from "@vercel/sdk/models/userevent.js";

let value: WebAnalyticsEvent = {
  currentThreshold: 8207.35,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |