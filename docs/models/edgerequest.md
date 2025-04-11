# EdgeRequest

## Example Usage

```typescript
import { EdgeRequest } from "@vercel/sdk/models/userevent.js";

let value: EdgeRequest = {
  currentThreshold: 4078.48,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |