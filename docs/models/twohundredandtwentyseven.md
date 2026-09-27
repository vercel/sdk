# TwoHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySeven } from "@vercel/sdk/models/twohundredandeighteen.js";

let value: TwoHundredAndTwentySeven = {
  next: {
    allowUnsafeScriptSrcKeywords: true,
    enabled: true,
    enforcePercentage: 662.67,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: false,
    enforcePercentage: 2079.62,
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