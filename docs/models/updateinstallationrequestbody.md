# UpdateInstallationRequestBody

## Example Usage

```typescript
import { UpdateInstallationRequestBody } from "@vercel/sdk/models/updateinstallationop.js";

let value: UpdateInstallationRequestBody = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `billingPlan`                                                                              | [models.BillingPlan](../models/billingplan.md)                                             | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `notification`                                                                             | *models.Notification*                                                                      | :heavy_minus_sign:                                                                         | A notification to display to your customer. Send `null` to clear the current notification. |