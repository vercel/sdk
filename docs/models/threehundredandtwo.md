# ThreeHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwo } from "@vercel/sdk/models/twohundredandeightyfive.js";

let value: ThreeHundredAndTwo = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "PROJECT_VIEWER",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload302Project](../models/usereventpayload302project.md) | :heavy_check_mark:                                                           | N/A                                                                          |