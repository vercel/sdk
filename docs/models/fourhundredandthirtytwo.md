# FourHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyTwo } from "@vercel/sdk/models/payloadstaticips.js";

let value: FourHundredAndThirtyTwo = {
  next: {
    enabled: false,
    projectScope: "none",
  },
  previous: {
    enabled: true,
    projectScope: "all",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload432Next](../models/usereventpayload432next.md)         | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |
| `previous`                                                                     | [models.UserEventPayload432Previous](../models/usereventpayload432previous.md) | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |