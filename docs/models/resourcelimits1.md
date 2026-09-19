# ResourceLimits1

Override for a token-bucket rate limit: a fixed quantity per duration.

## Example Usage

```typescript
import { ResourceLimits1 } from "@vercel/sdk/models/target.js";

let value: ResourceLimits1 = {
  duration: 3751.02,
  max: 359.38,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `duration`         | *number*           | :heavy_check_mark: | N/A                |
| `max`              | *number*           | :heavy_check_mark: | N/A                |