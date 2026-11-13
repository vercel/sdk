# DeliveryStats

Delivery health of a drain over the last 24 hours, counted on finished deliveries (a delivery saved by an automatic retry counts once, as delivered): `failing` when more than 5 deliveries failed and they are at least 1% of all finished deliveries, `healthy` otherwise, and `unknown` when no delivery finished in the window.

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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `attempts`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Finished deliveries in the window: delivered plus finally failed.          |
| `failures`                                                                 | *number*                                                                   | :heavy_check_mark:                                                         | Deliveries that finally failed in the window, after any automatic retries. |
| `state`                                                                    | [models.GetDrainState](../models/getdrainstate.md)                         | :heavy_check_mark:                                                         | N/A                                                                        |
| `window`                                                                   | [models.Window](../models/window.md)                                       | :heavy_check_mark:                                                         | N/A                                                                        |