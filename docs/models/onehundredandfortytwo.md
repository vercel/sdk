# OneHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyTwo } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 2716.8,
  },
  next: {
    functionDefaultTimeout: 8825.2,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload142Previous](../models/usereventpayload142previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload142Next](../models/usereventpayload142next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |