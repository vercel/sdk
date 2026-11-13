# ResponseBodyDeliveryStats

Delivery health of a drain over the last 24 hours, counted on finished deliveries (a delivery saved by an automatic retry counts once, as delivered): `failing` when more than 5 deliveries failed and they are at least 1% of all finished deliveries, `healthy` otherwise, and `unknown` when no delivery finished in the window.

## Example Usage

```typescript
import { ResponseBodyDeliveryStats } from "@vercel/sdk/models/createdrainop.js";

let value: ResponseBodyDeliveryStats = {
  attempts: 3165.74,
  failures: 9288.86,
  state: "healthy",
  window: "24h",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `attempts`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | Finished deliveries in the window: delivered plus finally failed.                            |
| `failures`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | Deliveries that finally failed in the window, after any automatic retries.                   |
| `state`                                                                                      | [models.CreateDrainResponseBodyDrainsState](../models/createdrainresponsebodydrainsstate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `window`                                                                                     | [models.ResponseBodyWindow](../models/responsebodywindow.md)                                 | :heavy_check_mark:                                                                           | N/A                                                                                          |