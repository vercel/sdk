# BlobDataTransfer

## Example Usage

```typescript
import { BlobDataTransfer } from "@vercel/sdk/models/userevent.js";

let value: BlobDataTransfer = {
  currentThreshold: 7290.07,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |