# Artifacts

## Example Usage

```typescript
import { Artifacts } from "@vercel/sdk/models/userevent.js";

let value: Artifacts = {
  currentThreshold: 1235.46,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |