# ThreeHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThree } from "@vercel/sdk/models/twohundredandeightysix.js";

let value: ThreeHundredAndThree = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "PROJECT_GUEST",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload303Project](../models/usereventpayload303project.md) | :heavy_check_mark:                                                           | N/A                                                                          |