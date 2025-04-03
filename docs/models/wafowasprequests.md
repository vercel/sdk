# WafOwaspRequests

## Example Usage

```typescript
import { WafOwaspRequests } from "@vercel/sdk/models/userevent.js";

let value: WafOwaspRequests = {
  currentThreshold: 4543.34,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |