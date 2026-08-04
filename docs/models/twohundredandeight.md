# TwoHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEight } from "@vercel/sdk/models/onehundredandseventyone.js";

let value: TwoHundredAndEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `projectId`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `projectName`                                                            | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `previous`                                                               | [models.UserEventPayloadPrevious](../models/usereventpayloadprevious.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `next`                                                                   | [models.UserEventPayload208Next](../models/usereventpayload208next.md)   | :heavy_check_mark:                                                       | N/A                                                                      |