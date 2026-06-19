# TwoHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyThree } from "@vercel/sdk/models/removedusers.js";

let value: TwoHundredAndTwentyThree = {
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
| `previous`                                                                     | [models.UserEventPayload223Previous](../models/usereventpayload223previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload223Next](../models/usereventpayload223next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |