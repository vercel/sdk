# CreateDrainResponseBodyDeliveryStats

Delivery health of a drain over the last 24 hours: `failing` when more than 5 delivery attempts and at least 1% of all attempts did not succeed, `healthy` otherwise, and `unknown` when there were no attempts or the stats could not be loaded.

## Example Usage

```typescript
import { CreateDrainResponseBodyDeliveryStats } from "@vercel/sdk/models/createdrainop.js";

let value: CreateDrainResponseBodyDeliveryStats = {
  attempts: 8311.19,
  failures: 9665.88,
  state: "failing",
  window: "24h",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `attempts`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | All delivery attempts in the window.                                               |
| `failures`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | Delivery attempts that did not succeed in the window.                              |
| `state`                                                                            | [models.CreateDrainResponseBodyState](../models/createdrainresponsebodystate.md)   | :heavy_check_mark:                                                                 | N/A                                                                                |
| `window`                                                                           | [models.CreateDrainResponseBodyWindow](../models/createdrainresponsebodywindow.md) | :heavy_check_mark:                                                                 | N/A                                                                                |