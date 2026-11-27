# FourHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentySeven } from "@vercel/sdk/models/threehundredandeightysix.js";

let value: FourHundredAndTwentySeven = {
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
| `store`                                          | [models.PayloadStore](../models/payloadstore.md) | :heavy_check_mark:                               | N/A                                              |
| `destinationTeamId`                              | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `destinationTeamName`                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |