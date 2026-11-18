# FourHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyTwo } from "@vercel/sdk/models/usereventpayload426next.js";

let value: FourHundredAndSixtyTwo = {
  convertedFromTrial: true,
  invoiceId: "<id>",
  plan: "enterprise",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `convertedFromTrial`                           | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `invoiceId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `plan`                                         | [models.PayloadPlan](../models/payloadplan.md) | :heavy_check_mark:                             | N/A                                            |