# ThreeHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySix } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndTwentySix = {
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
| `project`                                                                    | [models.UserEventPayload326Project](../models/usereventpayload326project.md) | :heavy_check_mark:                                                           | N/A                                                                          |