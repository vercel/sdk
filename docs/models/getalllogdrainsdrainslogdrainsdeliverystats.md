# GetAllLogDrainsDrainsLogDrainsDeliveryStats

Delivery health of a drain over the last 24 hours, counted on finished deliveries (a delivery saved by an automatic retry counts once, as delivered): `failing` when more than 5 deliveries failed and they are at least 1% of all finished deliveries, `healthy` otherwise, and `unknown` when no delivery finished in the window.

## Example Usage

```typescript
import { GetAllLogDrainsDrainsLogDrainsDeliveryStats } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsDrainsLogDrainsDeliveryStats = {
  attempts: 3886.96,
  failures: 9111.16,
  state: "failing",
  totalFailedDeliveries: 8302.08,
  totalRetriedDeliveries: 9832.26,
  totalSuccessfulDeliveries: 1409.66,
  window: "24h",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `attempts`                                                                                                               | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Finished deliveries in the window: delivered plus finally failed.                                                        |
| `failures`                                                                                                               | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Deliveries that finally failed in the window.                                                                            |
| `state`                                                                                                                  | [models.GetAllLogDrainsDrainsState](../models/getalllogdrainsdrainsstate.md)                                             | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `totalFailedDeliveries`                                                                                                  | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Deliveries that finally failed in the window, after any automatic retries.                                               |
| `totalRetriedDeliveries`                                                                                                 | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Deliveries whose first try failed and were scheduled for an automatic retry in the window, whatever their final outcome. |
| `totalSuccessfulDeliveries`                                                                                              | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Deliveries delivered in the window, on the first try or after automatic retries.                                         |
| `window`                                                                                                                 | [models.GetAllLogDrainsDrainsLogDrainsWindow](../models/getalllogdrainsdrainslogdrainswindow.md)                         | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |