# OneHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyOne } from "@vercel/sdk/models/job4.js";

let value: OneHundredAndTwentyOne = {
  url: "https://warped-turret.info/",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `newTeam`                                                              | [models.UserEventPayloadNewTeam](../models/usereventpayloadnewteam.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `oldTeam`                                                              | [models.UserEventPayloadOldTeam](../models/usereventpayloadoldteam.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `url`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |