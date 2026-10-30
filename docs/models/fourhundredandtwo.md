# FourHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwo } from "@vercel/sdk/models/usereventpayload390type.js";

let value: FourHundredAndTwo = {
  next: {
    enabled: true,
    projectScope: "all",
  },
  previous: {
    enabled: false,
    projectScope: "all",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload402Next](../models/usereventpayload402next.md)         | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |
| `previous`                                                                     | [models.UserEventPayload402Previous](../models/usereventpayload402previous.md) | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |