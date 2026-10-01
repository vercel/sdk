# TwoHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEighty } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndEighty = {
  next: {
    functionDefaultTimeout: 9659.32,
  },
  previous: {
    functionDefaultTimeout: null,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload280Next](../models/usereventpayload280next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload280Previous](../models/usereventpayload280previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |