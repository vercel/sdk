# ThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyTwo } from "@vercel/sdk/models/usereventpayload27provider.js";

let value: ThirtyTwo = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
  member: {
    id: "<id>",
    kind: "iam-access-group",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accessPolicy`                                                                   | [models.UserEventPayloadAccessPolicy](../models/usereventpayloadaccesspolicy.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `member`                                                                         | [models.Member](../models/member.md)                                             | :heavy_check_mark:                                                               | N/A                                                                              |