# FourHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndThirtyOne } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: FourHundredAndThirtyOne = {
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
| `next`                                                                         | [models.UserEventPayload431Next](../models/usereventpayload431next.md)         | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |
| `previous`                                                                     | [models.UserEventPayload431Previous](../models/usereventpayload431previous.md) | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |