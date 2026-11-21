# ThreeHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyEight } from "@vercel/sdk/models/threehundredandtwentyone.js";

let value: ThreeHundredAndTwentyEight = {
  next: {
    functionZeroConfigFailover: true,
  },
  previous: {
    functionZeroConfigFailover: true,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload328Next](../models/usereventpayload328next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload328Previous](../models/usereventpayload328previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |