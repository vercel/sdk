# FourHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwelve } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: FourHundredAndTwelve = {
  convertedFromTrial: false,
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