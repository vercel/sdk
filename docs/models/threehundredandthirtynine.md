# ThreeHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyNine } from "@vercel/sdk/models/usereventpayload328names.js";

let value: ThreeHundredAndThirtyNine = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "integration",
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