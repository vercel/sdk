# FourHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyFour } from "@vercel/sdk/models/fourhundredandfortyfive.js";

let value: FourHundredAndSeventyFour = {
  convertedFromTrial: true,
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