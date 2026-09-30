# TwoHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirty } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndThirty = {
  next: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: false,
    enforcePercentage: 4549.47,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: true,
    enabled: false,
    enforcePercentage: 8621.89,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  projectId: "<id>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `next`                                                                   | [models.UserEventPayloadNext](../models/usereventpayloadnext.md)         | :heavy_check_mark:                                                       | N/A                                                                      |
| `previous`                                                               | [models.UserEventPayloadPrevious](../models/usereventpayloadprevious.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |