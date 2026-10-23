# DeliveryStats

Delivery health of a drain over the last 24 hours: `failing` when more than 5 delivery attempts and at least 1% of all attempts did not succeed, `healthy` otherwise, and `unknown` when there were no attempts or the stats could not be loaded.

## Example Usage

```typescript
import { DeliveryStats } from "@vercel/sdk/models/getdrainop.js";

let value: DeliveryStats = {
  attempts: 3989.05,
  failures: 89.09,
  state: "failing",
  window: "24h",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `attempts`                                            | *number*                                              | :heavy_check_mark:                                    | All delivery attempts in the window.                  |
| `failures`                                            | *number*                                              | :heavy_check_mark:                                    | Delivery attempts that did not succeed in the window. |
| `state`                                               | [models.GetDrainState](../models/getdrainstate.md)    | :heavy_check_mark:                                    | N/A                                                   |
| `window`                                              | [models.Window](../models/window.md)                  | :heavy_check_mark:                                    | N/A                                                   |