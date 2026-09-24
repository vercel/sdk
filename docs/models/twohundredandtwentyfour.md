# TwoHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFour } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: TwoHundredAndTwentyFour = {
  next: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: true,
    enforcePercentage: 443.5,
    mode: "<value>",
    newResourceBlockingPolicy: "block",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: false,
    enforcePercentage: 3253.77,
    mode: "<value>",
    newResourceBlockingPolicy: "block",
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