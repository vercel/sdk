# ThreeHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyOne } from "@vercel/sdk/models/threehundredandsixty.js";

let value: ThreeHundredAndSeventyOne = {
  store: {
    id: "<id>",
    type: "blob",
  },
  transferRequestCode: "<value>",
  originTeamId: "<id>",
  originTeamName: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `store`                                                            | [models.UserEventPayloadStore](../models/usereventpayloadstore.md) | :heavy_check_mark:                                                 | N/A                                                                |
| `transferRequestCode`                                              | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `originTeamId`                                                     | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `originTeamName`                                                   | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |