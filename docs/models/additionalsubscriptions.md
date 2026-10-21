# AdditionalSubscriptions

Additional source subscriptions replaced by this purchase

## Example Usage

```typescript
import { AdditionalSubscriptions } from "@vercel/sdk/models/buycreditsop.js";

let value: AdditionalSubscriptions = {
  currentCycleEndDate: "<value>",
  orbSubscriptionId: "<id>",
  planId: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `currentCycleEndDate`                                             | *string*                                                          | :heavy_check_mark:                                                | The end of the additional source subscription billing cycle       |
| `orbSubscriptionId`                                               | *string*                                                          | :heavy_check_mark:                                                | The additional source Orb subscription ID                         |
| `planId`                                                          | *string*                                                          | :heavy_check_mark:                                                | The ID of the plan assigned to the additional source subscription |