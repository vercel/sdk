# RateLimitNotice

## Example Usage

```typescript
import { RateLimitNotice } from "@vercel/sdk/models/ratelimitnotice.js";

let value: RateLimitNotice = {
  remaining: 941760,
  reset: 597945,
  resetMs: 834699,
  total: 74738,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `remaining`        | *number*           | :heavy_check_mark: | N/A                |
| `reset`            | *number*           | :heavy_check_mark: | N/A                |
| `resetMs`          | *number*           | :heavy_check_mark: | N/A                |
| `total`            | *number*           | :heavy_check_mark: | N/A                |