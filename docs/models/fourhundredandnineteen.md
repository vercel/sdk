# FourHundredAndNineteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNineteen } from "@vercel/sdk/models/fourhundredandnineteen.js";

let value: FourHundredAndNineteen = {
  next: {
    enabled: true,
    projectScope: "none",
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
| `next`                                                                         | [models.UserEventPayload419Next](../models/usereventpayload419next.md)         | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |
| `previous`                                                                     | [models.UserEventPayload419Previous](../models/usereventpayload419previous.md) | :heavy_check_mark:                                                             | Mirrors the `security-review` setting value in `@api/api-settings`.            |