# GetVercelCiInvocationTreeRunConclusion

The aggregate outcome of every job in the invocation. Omitted while jobs are still running. Any failed job → "failed"; any (non-cascade) skipped job → "skipped"; else "succeeded". Present on completed invocations written after the field shipped; absent on older rows.

## Example Usage

```typescript
import { GetVercelCiInvocationTreeRunConclusion } from "@vercel/sdk/models/getvercelciinvocationtreeop.js";

let value: GetVercelCiInvocationTreeRunConclusion = {
  result: "succeeded",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `result`                                                                                               | [models.GetVercelCiInvocationTreeVercelCiResult](../models/getvercelciinvocationtreevercelciresult.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |