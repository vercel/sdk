# RuntimeCacheWrite

## Example Usage

```typescript
import { RuntimeCacheWrite } from "@vercel/sdk/models/userevent.js";

let value: RuntimeCacheWrite = {
  currentThreshold: 8347.02,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |