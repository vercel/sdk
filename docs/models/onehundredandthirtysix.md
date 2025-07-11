# OneHundredAndThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtySix = {
  project: {
    name: "<value>",
    role: "ADMIN",
    invitedUserName: "<value>",
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload136Project](../models/usereventpayload136project.md) | :heavy_check_mark:                                                           | N/A                                                                          |