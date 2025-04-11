# PostgresDataTransfer

## Example Usage

```typescript
import { PostgresDataTransfer } from "@vercel/sdk/models/userevent.js";

let value: PostgresDataTransfer = {
  currentThreshold: 8026.09,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |