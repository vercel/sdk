# FunctionInvocation

## Example Usage

```typescript
import { FunctionInvocation } from "@vercel/sdk/models/userevent.js";

let value: FunctionInvocation = {
  currentThreshold: 2010.05,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |