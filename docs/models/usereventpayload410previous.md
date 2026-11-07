# UserEventPayload410Previous

Mirrors the `security-review` setting value in `@api/api-settings`.

## Example Usage

```typescript
import { UserEventPayload410Previous } from "@vercel/sdk/models/usereventpayload403type.js";

let value: UserEventPayload410Previous = {
  enabled: false,
  projectScope: "selected",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `enabled`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `projectIds`                                                   | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `projectScope`                                                 | [models.PayloadProjectScope](../models/payloadprojectscope.md) | :heavy_check_mark:                                             | N/A                                                            |