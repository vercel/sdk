# OneHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyOne } from "@vercel/sdk/models/payloadbranchmatcher.js";

let value: OneHundredAndSeventyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload171Previous](../models/usereventpayload171previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload171Next](../models/usereventpayload171next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |