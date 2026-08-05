# OneHundredAndNinetySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetySix } from "@vercel/sdk/models/onehundredandseventyone.js";

let value: OneHundredAndNinetySix = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 2377.39,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: false,
  },
  next: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 4670.89,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: true,
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `projectId`                                                      | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `previous`                                                       | [models.PayloadPrevious](../models/payloadprevious.md)           | :heavy_check_mark:                                               | N/A                                                              |
| `next`                                                           | [models.UserEventPayloadNext](../models/usereventpayloadnext.md) | :heavy_check_mark:                                               | N/A                                                              |