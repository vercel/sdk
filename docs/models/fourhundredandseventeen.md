# FourHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventeen } from "@vercel/sdk/models/ssoprotectioncve55182migrationappliedfrom.js";

let value: FourHundredAndSeventeen = {
  store: {
    id: "<id>",
    type: "blob",
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