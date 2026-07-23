# TwoHundredAndFiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFive } from "@vercel/sdk/models/twohundredandseven.js";

let value: TwoHundredAndFiftyFive = {
  project: {
    name: "<value>",
    role: "PROJECT_GUEST",
    invitedUserName: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload255Project](../models/usereventpayload255project.md) | :heavy_check_mark:                                                           | N/A                                                                          |