# OneHundredAndFortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyNine } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortyNine = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionAllowedDomains: [
      "<value 1>",
    ],
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload149Next](../models/usereventpayload149next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload149Previous](../models/usereventpayload149previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |