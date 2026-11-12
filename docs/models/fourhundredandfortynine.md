# FourHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortyNine } from "@vercel/sdk/models/fourhundredandnine.js";

let value: FourHundredAndFortyNine = {
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