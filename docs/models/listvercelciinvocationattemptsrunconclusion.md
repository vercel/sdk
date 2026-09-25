# ListVercelCiInvocationAttemptsRunConclusion

The aggregate outcome of every job in the invocation. Omitted while jobs are still running. Any failed job → "failed"; any (non-cascade) skipped job → "skipped"; else "succeeded". Present on completed invocations written after the field shipped; absent on older rows.

## Example Usage

```typescript
import { ListVercelCiInvocationAttemptsRunConclusion } from "@vercel/sdk/models/listvercelciinvocationattemptsop.js";

let value: ListVercelCiInvocationAttemptsRunConclusion = {
  result: "skipped",
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                         | [models.ListVercelCiInvocationAttemptsVercelCiResult](../models/listvercelciinvocationattemptsvercelciresult.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |