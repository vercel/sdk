# ThreeHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyFive } from "@vercel/sdk/models/ssoprotection2.js";

let value: ThreeHundredAndFiftyFive = {
  invoiceId: "<id>",
  convertedFromTrial: false,
  plan: "pro",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `invoiceId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `convertedFromTrial`                           | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `plan`                                         | [models.PayloadPlan](../models/payloadplan.md) | :heavy_check_mark:                             | N/A                                            |