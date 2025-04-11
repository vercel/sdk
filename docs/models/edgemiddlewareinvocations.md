# EdgeMiddlewareInvocations

## Example Usage

```typescript
import { EdgeMiddlewareInvocations } from "@vercel/sdk/models/userevent.js";

let value: EdgeMiddlewareInvocations = {
  currentThreshold: 2265.31,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |