# TwoHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyFive } from "@vercel/sdk/models/onehundredandninety.js";

let value: TwoHundredAndFortyFive = {
  next: {
    allowUnsafeScriptSrcKeywords: false,
    enabled: true,
    enforcePercentage: 9164.74,
    mode: "<value>",
    newResourceBlockingPolicy: "allow",
  },
  previous: {
    allowUnsafeScriptSrcKeywords: true,
    enabled: false,
    enforcePercentage: 3859.03,
    mode: "<value>",
    newResourceBlockingPolicy: "block",
  },
  projectId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload245Next](../models/usereventpayload245next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload245Previous](../models/usereventpayload245previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |