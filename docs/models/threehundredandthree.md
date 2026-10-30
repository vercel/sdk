# ThreeHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThree } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndThree = {
  next: {
    functionZeroConfigFailover: false,
  },
  previous: {
    functionZeroConfigFailover: false,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload303Next](../models/usereventpayload303next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload303Previous](../models/usereventpayload303previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |