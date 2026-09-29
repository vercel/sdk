# ReferenceBillingPeriod

The canonical reference-product billing period at intent creation. Omitted for historical intents.

## Example Usage

```typescript
import { ReferenceBillingPeriod } from "@vercel/sdk/models/buycreditsop.js";

let value: ReferenceBillingPeriod = {
  endDate: "<value>",
  startDate: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `endDate`                                            | *string*                                             | :heavy_check_mark:                                   | The exclusive end of the reference billing period.   |
| `startDate`                                          | *string*                                             | :heavy_check_mark:                                   | The inclusive start of the reference billing period. |