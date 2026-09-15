# TwoHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtySix } from "@vercel/sdk/models/usereventpayloadnext.js";

let value: TwoHundredAndSixtySix = {
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
| `previous`                                                                     | [models.UserEventPayload266Previous](../models/usereventpayload266previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload266Next](../models/usereventpayload266next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |