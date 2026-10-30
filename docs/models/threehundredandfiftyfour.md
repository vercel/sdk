# ThreeHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftyFour } from "@vercel/sdk/models/threehundredandthirtyone.js";

let value: ThreeHundredAndFiftyFour = {
  next: {
    skewProtectionMaxAge: 3939.2,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload354Next](../models/usereventpayload354next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload354Previous](../models/usereventpayload354previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |