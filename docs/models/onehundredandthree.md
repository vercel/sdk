# OneHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThree } from "@vercel/sdk/models/usereventpayload72action.js";

let value: OneHundredAndThree = {
  id: "<id>",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `id`                                                 | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `newTeam`                                            | [models.PayloadNewTeam](../models/payloadnewteam.md) | :heavy_minus_sign:                                   | N/A                                                  |
| `oldTeam`                                            | [models.PayloadOldTeam](../models/payloadoldteam.md) | :heavy_minus_sign:                                   | N/A                                                  |