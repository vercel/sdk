# SixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtySix } from "@vercel/sdk/models/userevent.js";

let value: SixtySix = {
  enabled: true,
  updatedAt: 1679.11,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `enabled`          | *boolean*          | :heavy_check_mark: | N/A                |
| `updatedAt`        | *number*           | :heavy_check_mark: | N/A                |
| `firstEnabledAt`   | *number*           | :heavy_minus_sign: | N/A                |