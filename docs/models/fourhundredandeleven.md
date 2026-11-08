# FourHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEleven } from "@vercel/sdk/models/usereventpayload404type.js";

let value: FourHundredAndEleven = {
  next: {
    enabled: false,
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
| `next`                                                                         | [models.UserEventPayload411Next](../models/usereventpayload411next.md)         | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |
| `previous`                                                                     | [models.UserEventPayload411Previous](../models/usereventpayload411previous.md) | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |