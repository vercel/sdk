# TwoHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyOne } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndEightyOne = {
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
| `next`                                                                         | [models.UserEventPayload281Next](../models/usereventpayload281next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload281Previous](../models/usereventpayload281previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |