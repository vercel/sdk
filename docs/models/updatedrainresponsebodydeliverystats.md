# UpdateDrainResponseBodyDeliveryStats

Delivery health of a drain over the last 24 hours: `failing` when more than 5 delivery attempts and at least 1% of all attempts did not succeed, `healthy` otherwise, and `unknown` when there were no attempts or the stats could not be loaded.

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
| `attempts`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | All delivery attempts in the window.                                               |
| `failures`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | Delivery attempts that did not succeed in the window.                              |
| `state`                                                                            | [models.UpdateDrainResponseBodyState](../models/updatedrainresponsebodystate.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `window`                                                                           | [models.UpdateDrainResponseBodyWindow](../models/updatedrainresponsebodywindow.md) | :heavy_check_mark:                                                                 | N/A                                                                                |