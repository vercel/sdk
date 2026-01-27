# OneHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentySeven } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentySeven = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultMemoryType: null,
  },
  next: {
    functionDefaultMemoryType: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload127Previous](../models/usereventpayload127previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload127Next](../models/usereventpayload127next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |