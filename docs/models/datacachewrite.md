# DataCacheWrite

## Example Usage

```typescript
import { DataCacheWrite } from "@vercel/sdk/models/userevent.js";

let value: DataCacheWrite = {
  currentThreshold: 3626.93,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |