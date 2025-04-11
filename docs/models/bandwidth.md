# Bandwidth

## Example Usage

```typescript
import { Bandwidth } from "@vercel/sdk/models/userevent.js";

let value: Bandwidth = {
  currentThreshold: 444.65,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |