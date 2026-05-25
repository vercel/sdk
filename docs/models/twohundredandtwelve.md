# TwoHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwelve } from "@vercel/sdk/models/onehundredandfiftyfive.js";

let value: TwoHundredAndTwelve = {
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
| `project`                                                                    | [models.UserEventPayload212Project](../models/usereventpayload212project.md) | :heavy_check_mark:                                                           | N/A                                                                          |