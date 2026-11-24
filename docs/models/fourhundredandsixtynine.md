# FourHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyNine } from "@vercel/sdk/models/fourhundredandforty.js";

let value: FourHundredAndSixtyNine = {
  convertedFromTrial: false,
  invoiceId: "<id>",
  plan: "hobby",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `convertedFromTrial`                           | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `invoiceId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `plan`                                         | [models.PayloadPlan](../models/payloadplan.md) | :heavy_check_mark:                             | N/A                                            |