# UserEventPayload402Previous

Mirrors the `security-review` setting value in `@api/api-settings`.

## Example Usage

```typescript
import { UserEventPayload402Previous } from "@vercel/sdk/models/usereventpayload390type.js";

let value: UserEventPayload402Previous = {
  enabled: false,
  projectScope: "all",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `enabled`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `projectIds`                                                   | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `projectScope`                                                 | [models.PayloadProjectScope](../models/payloadprojectscope.md) | :heavy_check_mark:                                             | N/A                                                            |