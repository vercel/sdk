# Triggers

Allocations that were at or over 100% when the pause was applied.

## Example Usage

```typescript
import { Triggers } from "@vercel/sdk/models/authuser.js";

let value: Triggers = {
  allocation: "dataCacheRead",
  usage: 3049.06,
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `allocation`                                                   | [models.Allocation](../models/allocation.md)                   | :heavy_check_mark:                                             | Metered allocation whose included amount was fully consumed.   |
| `usage`                                                        | *number*                                                       | :heavy_check_mark:                                             | Usage recorded for that allocation when the pause was applied. |