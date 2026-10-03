# ThreeHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeven } from "@vercel/sdk/models/twohundredandninetyfive.js";

let value: ThreeHundredAndSeven = {
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
| `project`                                                                    | [models.UserEventPayload307Project](../models/usereventpayload307project.md) | :heavy_check_mark:                                                           | N/A                                                                          |