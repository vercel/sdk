# TwoHundredAndThirtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyThree } from "@vercel/sdk/models/twohundredandeleven.js";

let value: TwoHundredAndThirtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 3848.34,
  },
  next: {
    functionDefaultTimeout: 3743.73,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload233Previous](../models/usereventpayload233previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload233Next](../models/usereventpayload233next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |