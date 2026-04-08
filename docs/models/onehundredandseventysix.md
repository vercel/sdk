# OneHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventySix } from "@vercel/sdk/models/usereventpayload162previous.js";

let value: OneHundredAndSeventySix = {
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
| `previous`                                                                     | [models.UserEventPayload176Previous](../models/usereventpayload176previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload176Next](../models/usereventpayload176next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |