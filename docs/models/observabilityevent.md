# ObservabilityEvent

## Example Usage

```typescript
import { ObservabilityEvent } from "@vercel/sdk/models/userevent.js";

let value: ObservabilityEvent = {
  currentThreshold: 337.46,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |