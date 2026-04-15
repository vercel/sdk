# CreateFlagOutcomeSlots

## Example Usage

```typescript
import { CreateFlagOutcomeSlots } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagOutcomeSlots = {
  promille: 5653.13,
  durationMs: 1665.11,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `promille`                                                             | *number*                                                               | :heavy_check_mark:                                                     | Promille of traffic for rollToVariant (0-100_000, where 1_000 = 1%)    |
| `durationMs`                                                           | *number*                                                               | :heavy_check_mark:                                                     | How long this promille is served in ms before moving to the next slot. |