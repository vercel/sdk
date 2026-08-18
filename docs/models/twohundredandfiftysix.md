# TwoHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftySix } from "@vercel/sdk/models/onehundredandninetythree.js";

let value: TwoHundredAndFiftySix = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    gitProvider: "github-limited",
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
| `previous`                                                                     | [models.UserEventPayload256Previous](../models/usereventpayload256previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload256Next](../models/usereventpayload256next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |