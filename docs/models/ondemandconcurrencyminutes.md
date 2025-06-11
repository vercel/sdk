# OnDemandConcurrencyMinutes

## Example Usage

```typescript
import { OnDemandConcurrencyMinutes } from "@vercel/sdk/models/userevent.js";

let value: OnDemandConcurrencyMinutes = {
  currentThreshold: 2281.01,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `currentThreshold` | *number*           | :heavy_check_mark: | N/A                |
| `warningAt`        | *number*           | :heavy_minus_sign: | N/A                |
| `blockedAt`        | *number*           | :heavy_minus_sign: | N/A                |