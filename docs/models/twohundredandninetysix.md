# TwoHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetySix } from "@vercel/sdk/models/twohundredandfiftysix.js";

let value: TwoHundredAndNinetySix = {
  transferRequestCode: "<value>",
  store: {
    id: "<id>",
    type: "integration",
  },
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `transferRequestCode`                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `store`                                                            | [models.UserEventPayloadStore](../models/usereventpayloadstore.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `originTeamId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `originTeamName`                                                   | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |