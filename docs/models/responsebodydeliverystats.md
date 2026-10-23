# ResponseBodyDeliveryStats

Delivery health of a drain over the last 24 hours: `failing` when more than 5 delivery attempts and at least 1% of all attempts did not succeed, `healthy` otherwise, and `unknown` when there were no attempts or the stats could not be loaded.

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
| `attempts`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | All delivery attempts in the window.                                                         |
| `failures`                                                                                   | *number*                                                                                     | :heavy_check_mark:                                                                           | Delivery attempts that did not succeed in the window.                                        |
| `state`                                                                                      | [models.CreateDrainResponseBodyDrainsState](../models/createdrainresponsebodydrainsstate.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `window`                                                                                     | [models.ResponseBodyWindow](../models/responsebodywindow.md)                                 | :heavy_check_mark:                                                                           | N/A                                                                                          |