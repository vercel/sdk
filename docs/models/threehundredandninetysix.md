# ThreeHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetySix } from "@vercel/sdk/models/payloadcity.js";

let value: ThreeHundredAndNinetySix = {
  convertedFromTrial: true,
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