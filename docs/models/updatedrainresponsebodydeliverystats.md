# UpdateDrainResponseBodyDeliveryStats

Delivery health of a drain over the last 24 hours, counted on finished deliveries (a delivery saved by an automatic retry counts once, as delivered): `failing` when more than 5 deliveries failed and they are at least 1% of all finished deliveries, `healthy` otherwise, and `unknown` when no delivery finished in the window.

## Example Usage

```typescript
import { UpdateDrainResponseBodyDeliveryStats } from "@vercel/sdk/models/updatedrainop.js";

let value: UpdateDrainResponseBodyDeliveryStats = {
  attempts: 322.62,
  failures: 150.72,
  state: "healthy",
  window: "24h",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `attempts`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | Finished deliveries in the window: delivered plus finally failed.                  |
| `failures`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | Deliveries that finally failed in the window, after any automatic retries.         |
| `state`                                                                            | [models.UpdateDrainResponseBodyState](../models/updatedrainresponsebodystate.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `window`                                                                           | [models.UpdateDrainResponseBodyWindow](../models/updatedrainresponsebodywindow.md) | :heavy_check_mark:                                                                 | N/A                                                                                |