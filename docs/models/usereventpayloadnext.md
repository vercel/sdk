# UserEventPayloadNext

## Example Usage

```typescript
import { UserEventPayloadNext } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayloadNext = {
  project: {
    id: "<id>",
    staticIps: {
      enabled: false,
    },
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `project`                                                                    | [models.UserEventPayload114Project](../models/usereventpayload114project.md) | :heavy_check_mark:                                                           | N/A                                                                          |