# ThreeHundredAndNinetyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyFive } from "@vercel/sdk/models/usereventpayload390type.js";

let value: ThreeHundredAndNinetyFive = {
  store: {
    id: "<id>",
    type: "redis",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `store`                                                            | [models.UserEventPayloadStore](../models/usereventpayloadstore.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `originTeamId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `originTeamName`                                                   | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |