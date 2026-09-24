# TwoHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyNine } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: TwoHundredAndSeventyNine = {
  next: {
    gitProvider: "vercel",
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
| `next`                                                                         | [models.UserEventPayload279Next](../models/usereventpayload279next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload279Previous](../models/usereventpayload279previous.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |