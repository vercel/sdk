# OneHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifty } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFifty = {
  project: {
    name: "<value>",
    role: "PROJECT_DEVELOPER",
    invitedUserName: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload150Project](../models/usereventpayload150project.md) | :heavy_check_mark:                                                           | N/A                                                                          |