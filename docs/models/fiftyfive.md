# FiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFive } from "@vercel/sdk/models/userevent.js";

let value: FiftyFive = {
  url: "https://afraid-whack.com/",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `url`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `oldTeam`                                                              | [models.UserEventPayloadOldTeam](../models/usereventpayloadoldteam.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `newTeam`                                                              | [models.UserEventPayloadNewTeam](../models/usereventpayloadnewteam.md) | :heavy_minus_sign:                                                     | N/A                                                                    |