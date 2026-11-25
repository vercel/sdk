# OneHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndForty } from "@vercel/sdk/models/jobproject.js";

let value: OneHundredAndForty = {
  url: "https://massive-pomelo.net",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `newTeam`                                                              | [models.UserEventPayloadNewTeam](../models/usereventpayloadnewteam.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `oldTeam`                                                              | [models.UserEventPayloadOldTeam](../models/usereventpayloadoldteam.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `url`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |