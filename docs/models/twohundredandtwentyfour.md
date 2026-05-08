# TwoHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyFour } from "@vercel/sdk/models/twohundredandtwentythree.js";

let value: TwoHundredAndTwentyFour = {
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
| `previous`                                                                     | [models.UserEventPayload224Previous](../models/usereventpayload224previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload224Next](../models/usereventpayload224next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |