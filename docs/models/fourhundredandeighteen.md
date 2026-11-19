# FourHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEighteen } from "@vercel/sdk/models/ssoprotectioncve55182migrationappliedfrom.js";

let value: FourHundredAndEighteen = {
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