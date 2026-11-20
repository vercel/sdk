# FourHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentySeven } from "@vercel/sdk/models/oldssoprotection2.js";

let value: FourHundredAndTwentySeven = {
  next: {
    enabled: false,
    projectScope: "all",
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
| `next`                                                                         | [models.UserEventPayload427Next](../models/usereventpayload427next.md)         | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |
| `previous`                                                                     | [models.UserEventPayload427Previous](../models/usereventpayload427previous.md) | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |