# TwoHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyEight } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndEightyEight = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "edge-config",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `transferRequestCode`                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `store`                                          | [models.PayloadStore](../models/payloadstore.md) | :heavy_check_mark:                               | N/A                                              |
| `destinationTeamId`                              | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `destinationTeamName`                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |