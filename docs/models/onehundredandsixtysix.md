# OneHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtySix } from "@vercel/sdk/models/usereventpayload162previous.js";

let value: OneHundredAndSixtySix = {
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
| `previous`                                                                     | [models.UserEventPayload166Previous](../models/usereventpayload166previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload166Next](../models/usereventpayload166next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |