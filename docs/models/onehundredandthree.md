# OneHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThree } from "@vercel/sdk/models/usereventpayload82resourcestype.js";

let value: OneHundredAndThree = {
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
| `project`                                                                    | [models.UserEventPayload103Project](../models/usereventpayload103project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `versionId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |