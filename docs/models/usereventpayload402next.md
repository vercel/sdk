# UserEventPayload402Next

Mirrors the `security-review` setting value in `@api/api-settings`.

## Example Usage

```typescript
import { UserEventPayload402Next } from "@vercel/sdk/models/usereventpayload390type.js";

let value: UserEventPayload402Next = {
  enabled: false,
  projectScope: "selected",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectIds`                                                                     | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `projectScope`                                                                   | [models.UserEventPayloadProjectScope](../models/usereventpayloadprojectscope.md) | :heavy_check_mark:                                                               | N/A                                                                              |