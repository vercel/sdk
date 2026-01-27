# OneHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyNine } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndEightyNine = {
  project: {
    name: "<value>",
    role: "PROJECT_DEVELOPER",
    invitedUserName: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload189Project](../models/usereventpayload189project.md) | :heavy_check_mark:                                                           | N/A                                                                          |