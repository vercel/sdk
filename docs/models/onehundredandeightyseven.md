# OneHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightySeven } from "@vercel/sdk/models/payloadgituserid.js";

let value: OneHundredAndEightySeven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "vercel",
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
| `previous`                                                                     | [models.UserEventPayload187Previous](../models/usereventpayload187previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload187Next](../models/usereventpayload187next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |