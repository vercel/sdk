# OneHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFour } from "@vercel/sdk/models/eightythree.js";

let value: OneHundredAndFour = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload104Project](../models/usereventpayload104project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `versionId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |