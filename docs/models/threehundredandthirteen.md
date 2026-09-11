# ThreeHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirteen } from "@vercel/sdk/models/twohundredandseventysix.js";

let value: ThreeHundredAndThirteen = {
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
| `next`                                                                         | [models.UserEventPayload313Next](../models/usereventpayload313next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload313Previous](../models/usereventpayload313previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |