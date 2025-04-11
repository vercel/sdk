# WafOwaspExcessBytes

## Example Usage

```typescript
import { WafOwaspExcessBytes } from "@vercel/sdk/models/userevent.js";

let value: WafOwaspExcessBytes = {
  currentThreshold: 2693.47,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |