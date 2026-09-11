# TwoHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventySix } from "@vercel/sdk/models/twohundredandseventysix.js";

let value: TwoHundredAndSeventySix = {
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
| `previous`                                                                     | [models.UserEventPayload276Previous](../models/usereventpayload276previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload276Next](../models/usereventpayload276next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |