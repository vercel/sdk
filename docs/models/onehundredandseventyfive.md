# OneHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyFive } from "@vercel/sdk/models/usereventpayload162next.js";

let value: OneHundredAndSeventyFive = {
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
| `previous`                                                                     | [models.UserEventPayload175Previous](../models/usereventpayload175previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload175Next](../models/usereventpayload175next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |