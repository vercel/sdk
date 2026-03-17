# OneHundredAndSixtyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyThree } from "@vercel/sdk/models/payloadbranchmatcher.js";

let value: OneHundredAndSixtyThree = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "github",
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
| `previous`                                                                     | [models.UserEventPayload163Previous](../models/usereventpayload163previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload163Next](../models/usereventpayload163next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |