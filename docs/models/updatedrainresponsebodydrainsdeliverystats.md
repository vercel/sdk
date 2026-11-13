# UpdateDrainResponseBodyDrainsDeliveryStats

Delivery health of a drain over the last 24 hours, counted on finished deliveries (a delivery saved by an automatic retry counts once, as delivered): `failing` when more than 5 deliveries failed and they are at least 1% of all finished deliveries, `healthy` otherwise, and `unknown` when no delivery finished in the window.

## Example Usage

```typescript
import { UpdateDrainResponseBodyDrainsDeliveryStats } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainResponseBodyDrainsDeliveryStats = {
  attempts: 5995.4,
  failures: 1899.1,
  state: "failing",
  window: "24h",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `attempts`                                                                                     | *number*                                                                                       | :heavy_check_mark:                                                                             | Finished deliveries in the window: delivered plus finally failed.                              |
| `failures`                                                                                     | *number*                                                                                       | :heavy_check_mark:                                                                             | Deliveries that finally failed in the window, after any automatic retries.                     |
| `state`                                                                                        | [models.UpdateDrainResponseBodyDrainsState](../models/updatedrainresponsebodydrainsstate.md)   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `window`                                                                                       | [models.UpdateDrainResponseBodyDrainsWindow](../models/updatedrainresponsebodydrainswindow.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |