# EdgeConfigWrite

## Example Usage

```typescript
import { EdgeConfigWrite } from "@vercel/sdk/models/userevent.js";

let value: EdgeConfigWrite = {
  currentThreshold: 9670.06,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |