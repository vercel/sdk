# TwoHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySix } from "@vercel/sdk/models/one1.js";

let value: TwoHundredAndTwentySix = {
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
| `previous`                                                                     | [models.UserEventPayload226Previous](../models/usereventpayload226previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload226Next](../models/usereventpayload226next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |