# OneHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyFour } from "@vercel/sdk/models/usereventpayload161next.js";

let value: OneHundredAndSeventyFour = {
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
| `previous`                                                                     | [models.UserEventPayload174Previous](../models/usereventpayload174previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload174Next](../models/usereventpayload174next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |