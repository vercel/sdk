# FourHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyThree } from "@vercel/sdk/models/usereventpayload385project.js";

let value: FourHundredAndThirtyThree = {
  billingConsent: "security-review-usage-billing-v1",
  source: "<value>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `billingConsent`                                     | [models.BillingConsent](../models/billingconsent.md) | :heavy_check_mark:                                   | N/A                                                  |
| `source`                                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |