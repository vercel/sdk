# MonitoringMetric

## Example Usage

```typescript
import { MonitoringMetric } from "@vercel/sdk/models/payloadenablepreviewfeedback.js";

let value: MonitoringMetric = {
  currentThreshold: 1959.51,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |