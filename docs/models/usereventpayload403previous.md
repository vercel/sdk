# UserEventPayload403Previous

Mirrors the `security-review` setting value in `@api/api-settings`.

## Example Usage

```typescript
import { UserEventPayload403Previous } from "@vercel/sdk/models/usereventpayload391type.js";

let value: UserEventPayload403Previous = {
  enabled: true,
  projectScope: "all",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `enabled`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `projectIds`                                                   | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `projectScope`                                                 | [models.PayloadProjectScope](../models/payloadprojectscope.md) | :heavy_check_mark:                                             | N/A                                                            |