# ThreeHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixteen } from "@vercel/sdk/models/twohundredandeightysix.js";

let value: ThreeHundredAndSixteen = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "redis",
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