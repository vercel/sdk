# OneHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyEight } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: [],
  },
  next: {
    functionDefaultRegions: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload128Previous](../models/usereventpayload128previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload128Next](../models/usereventpayload128next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |