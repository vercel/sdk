# PayloadTriggers

Allocations that were at or over 100% when the pause was applied.

## Example Usage

```typescript
import { PayloadTriggers } from "@vercel/sdk/models/fastdatatransfer.js";

let value: PayloadTriggers = {
  allocation: "wafOwaspExcessBytes",
  usage: 6164.3,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `allocation`                                                   | [models.PayloadAllocation](../models/payloadallocation.md)     | :heavy_check_mark:                                             | Metered allocation whose included amount was fully consumed.   |
| `usage`                                                        | *number*                                                       | :heavy_check_mark:                                             | Usage recorded for that allocation when the pause was applied. |