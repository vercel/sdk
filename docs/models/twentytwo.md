# TwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyTwo } from "@vercel/sdk/models/principal.js";

let value: TwentyTwo = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
  member: {
    id: "<id>",
    kind: "user",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accessPolicy`                                                                   | [models.UserEventPayloadAccessPolicy](../models/usereventpayloadaccesspolicy.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `member`                                                                         | [models.Member](../models/member.md)                                             | :heavy_check_mark:                                                               | N/A                                                                              |