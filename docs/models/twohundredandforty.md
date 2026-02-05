# TwoHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndForty } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndForty = {
  invoiceId: "<id>",
  convertedFromTrial: true,
  plan: "enterprise",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `invoiceId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `convertedFromTrial`                           | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `plan`                                         | [models.PayloadPlan](../models/payloadplan.md) | :heavy_check_mark:                             | N/A                                            |