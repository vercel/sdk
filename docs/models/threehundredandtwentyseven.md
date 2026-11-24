# ThreeHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySeven } from "@vercel/sdk/models/threehundredandtwentyfour.js";

let value: ThreeHundredAndTwentySeven = {
  next: {
    functionDefaultRegions: [],
  },
  previous: {
    functionDefaultRegions: null,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload327Next](../models/usereventpayload327next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload327Previous](../models/usereventpayload327previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |