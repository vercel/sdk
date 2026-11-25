# CreateFlagOutcomeFeatureFlagsRequestSlots

## Example Usage

```typescript
import { CreateFlagOutcomeFeatureFlagsRequestSlots } from "@vercel/sdk/models/createflagop.js";

let value: CreateFlagOutcomeFeatureFlagsRequestSlots = {
  promille: 6020.07,
  durationMs: 8530.25,
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `promille`                                                             | *number*                                                               | :heavy_check_mark:                                                     | Promille of traffic for rollToVariant (0-100_000, where 1_000 = 1%)    |
| `durationMs`                                                           | *number*                                                               | :heavy_check_mark:                                                     | How long this promille is served in ms before moving to the next slot. |