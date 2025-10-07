# Limit

## Example Usage

```typescript
import { Limit } from "@vercel/sdk/models/toomanyrequests.js";

let value: Limit = {
  total: 119.05,
  remaining: 1916.67,
  reset: 9160.2,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `total`            | *number*           | :heavy_check_mark: | N/A                |
| `remaining`        | *number*           | :heavy_check_mark: | N/A                |
| `reset`            | *number*           | :heavy_check_mark: | N/A                |