# OneHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundred } from "@vercel/sdk/models/usereventpayloadresources.js";

let value: OneHundred = {
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
| `project`                                                                    | [models.UserEventPayload100Project](../models/usereventpayload100project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `versionId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |