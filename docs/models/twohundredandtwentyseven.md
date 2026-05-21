# TwoHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySeven } from "@vercel/sdk/models/onehundredandfiftysix.js";

let value: TwoHundredAndTwentySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload227Previous](../models/usereventpayload227previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload227Next](../models/usereventpayload227next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |