# ThreeHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyNine } from "@vercel/sdk/models/threehundredandtwentyfive.js";

let value: ThreeHundredAndTwentyNine = {
  next: {
    functionDefaultTimeout: 1041.22,
  },
  previous: {
    functionDefaultTimeout: 5804.51,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload329Next](../models/usereventpayload329next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload329Previous](../models/usereventpayload329previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |