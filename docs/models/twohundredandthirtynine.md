# TwoHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyNine } from "@vercel/sdk/models/twohundredandeleven.js";

let value: TwoHundredAndThirtyNine = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "bitbucket",
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
| `previous`                                                                     | [models.UserEventPayload239Previous](../models/usereventpayload239previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload239Next](../models/usereventpayload239next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |