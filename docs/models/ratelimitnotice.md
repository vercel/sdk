# RateLimitNotice

## Example Usage

```typescript
import { RateLimitNotice } from "@vercel/sdk/models/ratelimitnotice.js";

let value: RateLimitNotice = {
  remaining: 367,
  reset: 273732,
  resetMs: 462097,
  total: 638363,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `remaining`        | *number*           | :heavy_check_mark: | N/A                |
| `reset`            | *number*           | :heavy_check_mark: | N/A                |
| `resetMs`          | *number*           | :heavy_check_mark: | N/A                |
| `total`            | *number*           | :heavy_check_mark: | N/A                |