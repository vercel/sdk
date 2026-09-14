# TwoHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyTwo } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFortyTwo = {
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
| `previous`                                                                     | [models.UserEventPayload242Previous](../models/usereventpayload242previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload242Next](../models/usereventpayload242next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |