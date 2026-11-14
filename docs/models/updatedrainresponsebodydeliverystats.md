# UpdateDrainResponseBodyDeliveryStats

Delivery health of a drain over the last 24 hours, counted on finished deliveries (a delivery saved by an automatic retry counts once, as delivered): `failing` when more than 5 deliveries failed and they are at least 1% of all finished deliveries, `healthy` otherwise, and `unknown` when no delivery finished in the window.

## Example Usage

```typescript
import { UpdateDrainResponseBodyDeliveryStats } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainResponseBodyDeliveryStats = {
  attempts: 322.62,
  failures: 150.72,
  state: "healthy",
  totalFailedDeliveries: 8776.2,
  totalRetriedDeliveries: 4429.79,
  totalSuccessfulDeliveries: 6822.8,
  window: "24h",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `attempts`                                                                                                               | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Finished deliveries in the window: delivered plus finally failed.                                                        |
| `failures`                                                                                                               | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Deliveries that finally failed in the window.                                                                            |
| `state`                                                                                                                  | [models.UpdateDrainResponseBodyState](../models/updatedrainresponsebodystate.md)                                         | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `totalFailedDeliveries`                                                                                                  | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Deliveries that finally failed in the window, after any automatic retries.                                               |
| `totalRetriedDeliveries`                                                                                                 | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Deliveries whose first try failed and were scheduled for an automatic retry in the window, whatever their final outcome. |
| `totalSuccessfulDeliveries`                                                                                              | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | Deliveries delivered in the window, on the first try or after automatic retries.                                         |
| `window`                                                                                                                 | [models.UpdateDrainResponseBodyWindow](../models/updatedrainresponsebodywindow.md)                                       | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |