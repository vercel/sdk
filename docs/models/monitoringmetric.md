# MonitoringMetric

## Example Usage

```typescript
import { MonitoringMetric } from "@vercel/sdk/models/userevent.js";

let value: MonitoringMetric = {
  currentThreshold: 5428.07,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |