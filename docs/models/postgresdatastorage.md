# PostgresDataStorage

## Example Usage

```typescript
import { PostgresDataStorage } from "@vercel/sdk/models/userevent.js";

let value: PostgresDataStorage = {
  currentThreshold: 7734.55,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |