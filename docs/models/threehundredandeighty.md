# ThreeHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighty } from "@vercel/sdk/models/usereventpayload338budget.js";

let value: ThreeHundredAndEighty = {
  invoiceId: "<id>",
  convertedFromTrial: true,
  plan: "hobby",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `invoiceId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `convertedFromTrial`                           | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `plan`                                         | [models.PayloadPlan](../models/payloadplan.md) | :heavy_check_mark:                             | N/A                                            |