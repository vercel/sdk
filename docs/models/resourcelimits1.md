# ResourceLimits1

Override for a token-bucket rate limit: a fixed quantity per duration.

## Example Usage

```typescript
import { ResourceLimits1 } from "@vercel/sdk/models/onehundredandfortyfour.js";

let value: ResourceLimits1 = {
  max: 3751.02,
  duration: 359.38,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `max`              | *number*           | :heavy_check_mark: | N/A                |
| `duration`         | *number*           | :heavy_check_mark: | N/A                |