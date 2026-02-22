# TwoHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixteen } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: TwoHundredAndSixteen = {
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
| `project`                                                                    | [models.UserEventPayload216Project](../models/usereventpayload216project.md) | :heavy_check_mark:                                                           | N/A                                                                          |