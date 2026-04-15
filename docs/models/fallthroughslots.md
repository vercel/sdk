# FallthroughSlots

## Example Usage

```typescript
import { FallthroughSlots } from "@vercel/sdk/models/createflagop.js";

let value: FallthroughSlots = {
  promille: 1892.51,
  durationMs: 8438.71,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `promille`                                                             | *number*                                                               | :heavy_check_mark:                                                     | Promille of traffic for rollToVariant (0-100_000, where 1_000 = 1%)    |
| `durationMs`                                                           | *number*                                                               | :heavy_check_mark:                                                     | How long this promille is served in ms before moving to the next slot. |