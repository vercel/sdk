# ThreeHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventySeven } from "@vercel/sdk/models/threehundredandsixty.js";

let value: ThreeHundredAndSeventySeven = {
  next: {
    enabled: true,
    includeDrafts: true,
    scope: "all",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload377Next](../models/usereventpayload377next.md)         | :heavy_check_mark:                                                             | Automatic code review settings                                                 |
| `previous`                                                                     | [models.UserEventPayload377Previous](../models/usereventpayload377previous.md) | :heavy_minus_sign:                                                             | Automatic code review settings                                                 |