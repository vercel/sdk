# FourHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFive } from "@vercel/sdk/models/threehundredandfiftynine.js";

let value: FourHundredAndFive = {
  convertedFromTrial: false,
  invoiceId: "<id>",
  plan: "pro",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `convertedFromTrial`                           | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `invoiceId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `plan`                                         | [models.PayloadPlan](../models/payloadplan.md) | :heavy_check_mark:                             | N/A                                            |