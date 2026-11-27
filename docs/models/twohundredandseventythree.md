# TwoHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyThree } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: TwoHundredAndSeventyThree = {
  next: {
    allowUnsafeScriptSrcKeywords: true,
    enabled: true,
    enforcePercentage: 1044.86,
    mode: "<value>",
    newResourceBlockingPolicy: "block",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: false,
    enforcePercentage: 9067.68,
    mode: "<value>",
    newResourceBlockingPolicy: "block",
  },
  projectId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload273Next](../models/usereventpayload273next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload273Previous](../models/usereventpayload273previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |