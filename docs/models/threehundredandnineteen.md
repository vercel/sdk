# ThreeHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNineteen } from "@vercel/sdk/models/threehundredandfour.js";

let value: ThreeHundredAndNineteen = {
  next: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
    ],
  },
  previous: {
    functionDefaultRegions: [],
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload319Next](../models/usereventpayload319next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload319Previous](../models/usereventpayload319previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |