# EdgeMiddlewareInvocations

## Example Usage

```typescript
import { EdgeMiddlewareInvocations } from "@vercel/sdk/models/userevent.js";

let value: EdgeMiddlewareInvocations = {
  currentThreshold: 6866.9,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |