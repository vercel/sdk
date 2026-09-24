# TwoHundredAndSeventySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventySix } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: TwoHundredAndSeventySix = {
  next: {
    functionZeroConfigFailover: true,
  },
  previous: {
    functionZeroConfigFailover: true,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload276Next](../models/usereventpayload276next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload276Previous](../models/usereventpayload276previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |