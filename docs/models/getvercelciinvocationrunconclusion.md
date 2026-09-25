# GetVercelCiInvocationRunConclusion

The aggregate outcome of every job in the invocation. Omitted while jobs are still running. Any failed job → "failed"; any (non-cascade) skipped job → "skipped"; else "succeeded". Present on completed invocations written after the field shipped; absent on older rows.

## Example Usage

```typescript
import { GetVercelCiInvocationRunConclusion } from "@vercel/sdk/models/getvercelciinvocationop.js";

let value: GetVercelCiInvocationRunConclusion = {
  result: "skipped",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [models.GetVercelCiInvocationVercelCiResult](../models/getvercelciinvocationvercelciresult.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |