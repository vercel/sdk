# ConnectDataTransfer

## Example Usage

```typescript
import { ConnectDataTransfer } from "@vercel/sdk/models/userevent.js";

let value: ConnectDataTransfer = {
  currentThreshold: 8697.88,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |