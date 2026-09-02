# TwoHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixty } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndSixty = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "gitlab",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload260Previous](../models/usereventpayload260previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload260Next](../models/usereventpayload260next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |