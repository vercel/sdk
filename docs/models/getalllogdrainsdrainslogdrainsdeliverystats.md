# GetAllLogDrainsDrainsLogDrainsDeliveryStats

Delivery health of a drain over the last 24 hours, counted on finished deliveries (a delivery saved by an automatic retry counts once, as delivered): `failing` when more than 5 deliveries failed and they are at least 1% of all finished deliveries, `healthy` otherwise, and `unknown` when no delivery finished in the window.

## Example Usage

```typescript
import { GetAllLogDrainsDrainsLogDrainsDeliveryStats } from "@vercel/sdk/models/getalllogdrainsop.js";

let value: GetAllLogDrainsDrainsLogDrainsDeliveryStats = {
  attempts: 3886.96,
  failures: 9111.16,
  state: "failing",
  window: "24h",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `attempts`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | Finished deliveries in the window: delivered plus finally failed.                                |
| `failures`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | Deliveries that finally failed in the window, after any automatic retries.                       |
| `state`                                                                                          | [models.GetAllLogDrainsDrainsState](../models/getalllogdrainsdrainsstate.md)                     | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `window`                                                                                         | [models.GetAllLogDrainsDrainsLogDrainsWindow](../models/getalllogdrainsdrainslogdrainswindow.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |