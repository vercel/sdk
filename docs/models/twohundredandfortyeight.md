# TwoHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyEight } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndFortyEight = {
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
| `previous`                                                                     | [models.UserEventPayload248Previous](../models/usereventpayload248previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload248Next](../models/usereventpayload248next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |