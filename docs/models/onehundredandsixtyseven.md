# OneHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtySeven } from "@vercel/sdk/models/usereventpayload163previous.js";

let value: OneHundredAndSixtySeven = {
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
| `previous`                                                                     | [models.UserEventPayload167Previous](../models/usereventpayload167previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload167Next](../models/usereventpayload167next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |