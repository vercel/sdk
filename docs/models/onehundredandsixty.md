# OneHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixty } from "@vercel/sdk/models/onehundredandsixty.js";

let value: OneHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultRegions: [],
  },
  next: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload160Previous](../models/usereventpayload160previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload160Next](../models/usereventpayload160next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |