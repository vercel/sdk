# RateLimitNotice

## Example Usage

```typescript
import { RateLimitNotice } from "@vercel/sdk/models/ratelimitnotice.js";

let value: RateLimitNotice = {
  remaining: 413086,
  reset: 710059,
  resetMs: 789870,
  total: 317260,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `remaining`        | *number*           | :heavy_check_mark: | N/A                |
| `reset`            | *number*           | :heavy_check_mark: | N/A                |
| `resetMs`          | *number*           | :heavy_check_mark: | N/A                |
| `total`            | *number*           | :heavy_check_mark: | N/A                |