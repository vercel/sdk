# UpdateFlagOutcomeSlots

## Example Usage

```typescript
import { UpdateFlagOutcomeSlots } from "@vercel/sdk/models/updateflagop.js";

let value: UpdateFlagOutcomeSlots = {
  promille: 5916.44,
  durationMs: 9120.82,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `promille`                                                             | *number*                                                               | :heavy_check_mark:                                                     | Promille of traffic for rollToVariant (0-100_000, where 1_000 = 1%)    |
| `durationMs`                                                           | *number*                                                               | :heavy_check_mark:                                                     | How long this promille is served in ms before moving to the next slot. |