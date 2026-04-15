# UpdateFlagFallthroughSlots

## Example Usage

```typescript
import { UpdateFlagFallthroughSlots } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagFallthroughSlots = {
  promille: 4716.92,
  durationMs: 7454.93,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `promille`                                                             | *number*                                                               | :heavy_check_mark:                                                     | Promille of traffic for rollToVariant (0-100_000, where 1_000 = 1%)    |
| `durationMs`                                                           | *number*                                                               | :heavy_check_mark:                                                     | How long this promille is served in ms before moving to the next slot. |