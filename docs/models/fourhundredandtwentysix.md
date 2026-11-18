# FourHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentySix } from "@vercel/sdk/models/threehundredandseventyfive.js";

let value: FourHundredAndTwentySix = {
  next: {
    enabled: true,
    projectScope: "selected",
  },
  previous: {
    enabled: false,
    projectScope: "selected",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload426Next](../models/usereventpayload426next.md)         | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |
| `previous`                                                                     | [models.UserEventPayload426Previous](../models/usereventpayload426previous.md) | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |