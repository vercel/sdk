# FiftyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyThree } from "@vercel/sdk/models/userevent.js";

let value: FiftyThree = {
  name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `oldTeam`                                                                  | [models.UserEventPayload53OldTeam](../models/usereventpayload53oldteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |
| `newTeam`                                                                  | [models.UserEventPayload53NewTeam](../models/usereventpayload53newteam.md) | :heavy_minus_sign:                                                         | N/A                                                                        |