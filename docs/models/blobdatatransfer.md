# BlobDataTransfer

## Example Usage

```typescript
import { BlobDataTransfer } from "@vercel/sdk/models/nextrule.js";

let value: BlobDataTransfer = {
  currentThreshold: 7290.07,
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `blockedAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |
| `blockGracePeriodStartedAt` | *number*                    | :heavy_minus_sign:          | N/A                         |
| `currentThreshold`          | *number*                    | :heavy_check_mark:          | N/A                         |
| `warningAt`                 | *number*                    | :heavy_minus_sign:          | N/A                         |