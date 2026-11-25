# FourHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyThree } from "@vercel/sdk/models/fourhundredandfortyfour.js";

let value: FourHundredAndSeventyThree = {
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