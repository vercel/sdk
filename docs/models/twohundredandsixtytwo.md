# TwoHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyTwo } from "@vercel/sdk/models/usereventpayloadnext.js";

let value: TwoHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: null,
  },
  next: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload262Previous](../models/usereventpayload262previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload262Next](../models/usereventpayload262next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |