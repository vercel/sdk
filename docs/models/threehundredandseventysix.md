# ThreeHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventySix } from "@vercel/sdk/models/threehundredandsixtysix.js";

let value: ThreeHundredAndSeventySix = {
  store: {
    id: "<id>",
    type: "blob",
  },
  transferRequestCode: "<value>",
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `store`                                          | [models.PayloadStore](../models/payloadstore.md) | :heavy_check_mark:                               | N/A                                              |
| `transferRequestCode`                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `destinationTeamId`                              | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `destinationTeamName`                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |