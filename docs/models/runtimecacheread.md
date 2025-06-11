# RuntimeCacheRead

## Example Usage

```typescript
import { RuntimeCacheRead } from "@vercel/sdk/models/userevent.js";

let value: RuntimeCacheRead = {
  currentThreshold: 9785.5,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |