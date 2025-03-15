# PostgresDatabase

## Example Usage

```typescript
import { PostgresDatabase } from "@vercel/sdk/models/userevent.js";

let value: PostgresDatabase = {
  currentThreshold: 9630.94,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |