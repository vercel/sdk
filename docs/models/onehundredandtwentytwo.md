# OneHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyTwo } from "@vercel/sdk/models/usereventjobproject.js";

let value: OneHundredAndTwentyTwo = {
  url: "https://arid-pigsty.org",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `newTeam`                                                              | [models.UserEventPayloadNewTeam](../models/usereventpayloadnewteam.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `oldTeam`                                                              | [models.UserEventPayloadOldTeam](../models/usereventpayloadoldteam.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `url`                                                                  | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |