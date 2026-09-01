# TwoHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSix } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndSix = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 9351.18,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: true,
  },
  next: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 1236.06,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: false,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `previous`                                                               | [models.UserEventPayloadPrevious](../models/usereventpayloadprevious.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `next`                                                                   | [models.UserEventPayloadNext](../models/usereventpayloadnext.md)         | :heavy_check_mark:                                                       | N/A                                                                      |