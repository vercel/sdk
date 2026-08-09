# OneHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyEight } from "@vercel/sdk/models/one1.js";

let value: OneHundredAndNinetyEight = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 4924.82,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: true,
  },
  next: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 9465.3,
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