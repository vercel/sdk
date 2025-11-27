# SixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFive } from "@vercel/sdk/models/userevent.js";

let value: SixtyFive = {
  enabled: false,
  updatedAt: 3227.67,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `updatedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `firstEnabledAt`   | *number*           | :heavy_minus_sign: | N/A                |