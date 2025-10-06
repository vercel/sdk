# OneHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyTwo } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortyTwo = {
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
| `project`                                                                    | [models.UserEventPayload142Project](../models/usereventpayload142project.md) | :heavy_check_mark:                                                           | N/A                                                                          |