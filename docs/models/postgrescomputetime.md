# PostgresComputeTime

## Example Usage

```typescript
import { PostgresComputeTime } from "@vercel/sdk/models/userevent.js";

let value: PostgresComputeTime = {
  currentThreshold: 1330.76,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |