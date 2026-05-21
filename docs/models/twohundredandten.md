# TwoHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTen } from "@vercel/sdk/models/onehundredandfiftysix.js";

let value: TwoHundredAndTen = {
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
| `project`                                                                    | [models.UserEventPayload210Project](../models/usereventpayload210project.md) | :heavy_check_mark:                                                           | N/A                                                                          |