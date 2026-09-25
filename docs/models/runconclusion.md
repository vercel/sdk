# RunConclusion

The aggregate outcome of every job in the invocation. Omitted while jobs are still running. Any failed job → "failed"; any (non-cascade) skipped job → "skipped"; else "succeeded". Present on completed invocations written after the field shipped; absent on older rows.

## Example Usage

```typescript
import { RunConclusion } from "@vercel/sdk/models/listvercelciinvocationsop.js";

let value: RunConclusion = {
  result: "succeeded",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `result`                                                                                           | [models.ListVercelCiInvocationsVercelCiResult](../models/listvercelciinvocationsvercelciresult.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |