# OneHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyFour } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortyFour = {
  project: {
    name: "<value>",
    role: "ADMIN",
    invitedUserName: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload144Project](../models/usereventpayload144project.md) | :heavy_check_mark:                                                           | N/A                                                                          |