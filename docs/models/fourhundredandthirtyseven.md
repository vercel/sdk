# FourHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtySeven } from "@vercel/sdk/models/threehundredandeightysix.js";

let value: FourHundredAndThirtySeven = {
  next: {
    enabled: true,
    projectScope: "all",
  },
  previous: {
    enabled: true,
    projectScope: "selected",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload437Next](../models/usereventpayload437next.md)         | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |
| `previous`                                                                     | [models.UserEventPayload437Previous](../models/usereventpayload437previous.md) | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |