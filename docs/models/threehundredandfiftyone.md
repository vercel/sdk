# ThreeHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyOne } from "@vercel/sdk/models/threehundredandtwentyfour.js";

let value: ThreeHundredAndFiftyOne = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "PROJECT_DEVELOPER",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload351Project](../models/usereventpayload351project.md) | :heavy_check_mark:                                                           | N/A                                                                          |