# TwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFour } from "@vercel/sdk/models/twenty.js";

let value: TwentyFour = {
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