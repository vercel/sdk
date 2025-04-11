# LogDrainsVolume

## Example Usage

```typescript
import { LogDrainsVolume } from "@vercel/sdk/models/userevent.js";

let value: LogDrainsVolume = {
  currentThreshold: 9065.64,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |