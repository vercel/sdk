# ThreeHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEight } from "@vercel/sdk/models/usereventpayload278scope.js";

let value: ThreeHundredAndEight = {
  next: {
    functionDefaultMemoryType: "<value>",
  },
  previous: {
    functionDefaultMemoryType: "<value>",
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload308Next](../models/usereventpayload308next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload308Previous](../models/usereventpayload308previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |