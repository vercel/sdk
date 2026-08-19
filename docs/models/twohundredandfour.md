# TwoHundredAndFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFour } from "@vercel/sdk/models/onehundredandninetyfour.js";

let value: TwoHundredAndFour = {
  projectId: "<id>",
  previous: {
    enabled: true,
    mode: "<value>",
    enforcePercentage: 3803.82,
    newResourceBlockingPolicy: "allow",
    allowUnsafeScriptSrcKeywords: false,
  },
  next: {
    enabled: false,
    mode: "<value>",
    enforcePercentage: 9008.04,
    newResourceBlockingPolicy: "block",
    allowUnsafeScriptSrcKeywords: true,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `previous`                                                               | [models.UserEventPayloadPrevious](../models/usereventpayloadprevious.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `next`                                                                   | [models.UserEventPayloadNext](../models/usereventpayloadnext.md)         | :heavy_check_mark:                                                       | N/A                                                                      |