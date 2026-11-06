# ThreeHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirty } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: ThreeHundredAndThirty = {
  project: {
    invitedUserName: "<value>",
    name: "<value>",
    role: "ADMIN",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload330Project](../models/usereventpayload330project.md) | :heavy_check_mark:                                                           | N/A                                                                          |