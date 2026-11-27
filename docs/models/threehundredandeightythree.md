# ThreeHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyThree } from "@vercel/sdk/models/threehundredandtwentyfive.js";

let value: ThreeHundredAndEightyThree = {
  next: {
    skewProtectionMaxAge: 9719.78,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload383Next](../models/usereventpayload383next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload383Previous](../models/usereventpayload383previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |