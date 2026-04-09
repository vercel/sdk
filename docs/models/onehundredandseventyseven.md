# OneHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventySeven } from "@vercel/sdk/models/usereventpayload163previous.js";

let value: OneHundredAndSeventySeven = {
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
| `previous`                                                                     | [models.UserEventPayload177Previous](../models/usereventpayload177previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload177Next](../models/usereventpayload177next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |