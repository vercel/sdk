# ThreeHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventySeven } from "@vercel/sdk/models/usereventpayload335budget.js";

let value: ThreeHundredAndSeventySeven = {
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