# ThreeHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinety } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: ThreeHundredAndNinety = {
  previous: {
    enabled: false,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload390Previous](../models/usereventpayload390previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload390Next](../models/usereventpayload390next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |