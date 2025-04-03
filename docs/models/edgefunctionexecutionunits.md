# EdgeFunctionExecutionUnits

## Example Usage

```typescript
import { EdgeFunctionExecutionUnits } from "@vercel/sdk/models/userevent.js";

let value: EdgeFunctionExecutionUnits = {
  currentThreshold: 3875.67,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |