# ThreeHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSix } from "@vercel/sdk/models/twohundredandninetyfour.js";

let value: ThreeHundredAndSix = {
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
| `project`                                                                    | [models.UserEventPayload306Project](../models/usereventpayload306project.md) | :heavy_check_mark:                                                           | N/A                                                                          |