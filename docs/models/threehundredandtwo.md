# ThreeHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwo } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndTwo = {
  next: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  previous: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload302Next](../models/usereventpayload302next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload302Previous](../models/usereventpayload302previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |