# ThreeHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyFive } from "@vercel/sdk/models/usereventpayload333budget.js";

let value: ThreeHundredAndSeventyFive = {
  invoiceId: "<id>",
  convertedFromTrial: false,
  plan: "hobby",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `invoiceId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `convertedFromTrial`                           | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `plan`                                         | [models.PayloadPlan](../models/payloadplan.md) | :heavy_check_mark:                             | N/A                                            |