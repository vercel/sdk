# SixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyNine } from "@vercel/sdk/models/userevent.js";

let value: SixtyNine = {
  enabled: true,
  updatedAt: 223.49,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `updatedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `firstEnabledAt`   | *number*           | :heavy_minus_sign: | N/A                |