# TwoHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyOne } from "@vercel/sdk/models/usereventpayloadprevious.js";

let value: TwoHundredAndTwentyOne = {
  project: {
    name: "<value>",
    role: "PROJECT_VIEWER",
    invitedUserName: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload221Project](../models/usereventpayload221project.md) | :heavy_check_mark:                                                           | N/A                                                                          |