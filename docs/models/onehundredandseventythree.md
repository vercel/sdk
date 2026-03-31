# OneHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyThree } from "@vercel/sdk/models/onehundredandsixty.js";

let value: OneHundredAndSeventyThree = {
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
| `previous`                                                                     | [models.UserEventPayload173Previous](../models/usereventpayload173previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload173Next](../models/usereventpayload173next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |