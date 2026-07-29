# ThreeHundredAndSixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyNine } from "@vercel/sdk/models/threehundredandfortythree.js";

let value: ThreeHundredAndSixtyNine = {
  previous: {
    enabled: false,
    totpVerified: false,
  },
  next: {
    enabled: true,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload369Previous](../models/usereventpayload369previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload369Next](../models/usereventpayload369next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |