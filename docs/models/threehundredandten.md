# ThreeHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTen } from "@vercel/sdk/models/payloadenvironment.js";

let value: ThreeHundredAndTen = {
  previous: {
    enabled: true,
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
| `previous`                                                                     | [models.UserEventPayload310Previous](../models/usereventpayload310previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload310Next](../models/usereventpayload310next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |