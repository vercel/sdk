# OneHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyFour } from "@vercel/sdk/models/onehundredandfiftysix.js";

let value: OneHundredAndEightyFour = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: null,
  },
  next: {
    functionDefaultTimeout: 3486.67,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload184Previous](../models/usereventpayload184previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload184Next](../models/usereventpayload184next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |