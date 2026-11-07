# UserEventPayload410Next

Mirrors the `security-review` setting value in `@api/api-settings`.

## Example Usage

```typescript
import { UserEventPayload410Next } from "@vercel/sdk/models/usereventpayload403type.js";

let value: UserEventPayload410Next = {
  enabled: true,
  projectScope: "selected",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectIds`                                                                     | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `projectScope`                                                                   | [models.UserEventPayloadProjectScope](../models/usereventpayloadprojectscope.md) | :heavy_check_mark:                                                               | N/A                                                                              |