# AnalyticsUsage

## Example Usage

```typescript
import { AnalyticsUsage } from "@vercel/sdk/models/userevent.js";

let value: AnalyticsUsage = {
  currentThreshold: 2767.95,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |