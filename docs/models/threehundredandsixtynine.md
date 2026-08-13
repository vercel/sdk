# ThreeHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyNine } from "@vercel/sdk/models/payloadfactors.js";

let value: ThreeHundredAndSixtyNine = {
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