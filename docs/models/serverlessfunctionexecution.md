# ServerlessFunctionExecution

## Example Usage

```typescript
import { ServerlessFunctionExecution } from "@vercel/sdk/models/userevent.js";

let value: ServerlessFunctionExecution = {
  currentThreshold: 3387.82,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |