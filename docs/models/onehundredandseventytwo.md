# OneHundredAndSeventyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyTwo } from "@vercel/sdk/models/usereventpayload159next.js";

let value: OneHundredAndSeventyTwo = {
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
| `previous`                                                                     | [models.UserEventPayload172Previous](../models/usereventpayload172previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload172Next](../models/usereventpayload172next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |