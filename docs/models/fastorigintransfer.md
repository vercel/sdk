# FastOriginTransfer

## Example Usage

```typescript
import { FastOriginTransfer } from "@vercel/sdk/models/userevent.js";

let value: FastOriginTransfer = {
  currentThreshold: 3232.15,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |