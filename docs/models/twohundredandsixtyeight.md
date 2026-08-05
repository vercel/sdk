# TwoHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyEight } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndSixtyEight = {
  project: {
    name: "<value>",
    role: "PROJECT_VIEWER",
    invitedUserName: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload268Project](../models/usereventpayload268project.md) | :heavy_check_mark:                                                           | N/A                                                                          |