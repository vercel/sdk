# FastDataTransfer

## Example Usage

```typescript
import { FastDataTransfer } from "@vercel/sdk/models/userevent.js";

let value: FastDataTransfer = {
  currentThreshold: 1855.37,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |