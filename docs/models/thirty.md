# Thirty

The payload of the event, if requested.

## Example Usage

```typescript
import { Thirty } from "@vercel/sdk/models/userevent.js";

let value: Thirty = {
  accessPolicy: {
    id: "<id>",
    name: "<value>",
  },
  member: {
    id: "<id>",
    kind: "team",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accessPolicy`                                                                   | [models.UserEventPayloadAccessPolicy](../models/usereventpayloadaccesspolicy.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `member`                                                                         | [models.Member](../models/member.md)                                             | :heavy_check_mark:                                                               | N/A                                                                              |