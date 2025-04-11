# PostgresWrittenData

## Example Usage

```typescript
import { PostgresWrittenData } from "@vercel/sdk/models/userevent.js";

let value: PostgresWrittenData = {
  currentThreshold: 2186.77,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |