# OneHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyEight } from "@vercel/sdk/models/onehundredandfiftyone.js";

let value: OneHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: null,
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
| `previous`                                                                     | [models.UserEventPayload158Previous](../models/usereventpayload158previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload158Next](../models/usereventpayload158next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |