# ThreeHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSix } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundredAndSix = {
  next: {
    gitProvider: "github-custom-host",
    gitRepoId: "<id>",
    gitRepositoryName: "<value>",
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload306Next](../models/usereventpayload306next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload306Previous](../models/usereventpayload306previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |