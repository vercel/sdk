# ThreeHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundred } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: ThreeHundred = {
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
| `project`                                                                    | [models.UserEventPayload300Project](../models/usereventpayload300project.md) | :heavy_check_mark:                                                           | N/A                                                                          |