# OneHundredAndEightySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightySix } from "@vercel/sdk/models/microfrontends2.js";

let value: OneHundredAndEightySix = {
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
| `previous`                                                                     | [models.UserEventPayload186Previous](../models/usereventpayload186previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload186Next](../models/usereventpayload186next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |