# OneHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyTwo } from "@vercel/sdk/models/payloadresourceconfig.js";

let value: OneHundredAndSixtyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultMemoryType: "<value>",
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
| `previous`                                                                     | [models.UserEventPayload162Previous](../models/usereventpayload162previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload162Next](../models/usereventpayload162next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |