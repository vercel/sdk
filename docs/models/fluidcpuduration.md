# FluidCpuDuration

## Example Usage

```typescript
import { FluidCpuDuration } from "@vercel/sdk/models/userevent.js";

let value: FluidCpuDuration = {
  currentThreshold: 4994.98,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |