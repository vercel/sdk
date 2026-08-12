# OneHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyNine } from "@vercel/sdk/models/oneorigin.js";

let value: OneHundredAndNinetyNine = {
  projectId: "<id>",
  previous: null,
  next: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 4373.33,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: false,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previous`                                                       | [models.PayloadPrevious](../models/payloadprevious.md)           | :heavy_check_mark:                                               | N/A                                                              |
| `next`                                                           | [models.UserEventPayloadNext](../models/usereventpayloadnext.md) | :heavy_check_mark:                                               | N/A                                                              |