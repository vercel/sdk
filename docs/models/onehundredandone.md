# OneHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndOne } from "@vercel/sdk/models/usereventpayloaditems.js";

let value: OneHundredAndOne = {
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
| `project`                                                                    | [models.UserEventPayload101Project](../models/usereventpayload101project.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `versionId`                                                                  | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |