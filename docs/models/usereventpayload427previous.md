# UserEventPayload427Previous

Mirrors the `security-review` setting value in `@api/api-settings`.

## Example Usage

```typescript
import { UserEventPayload427Previous } from "@vercel/sdk/models/oldssoprotection2.js";

let value: UserEventPayload427Previous = {
  enabled: false,
  projectScope: "all",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `enabled`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `projectIds`                                                         | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `projectScope`                                                       | [models.PayloadProjectScope](../models/payloadprojectscope.md)       | :heavy_check_mark:                                                   | N/A                                                                  |
| `repositoryScope`                                                    | [models.PayloadRepositoryScope](../models/payloadrepositoryscope.md) | :heavy_minus_sign:                                                   | N/A                                                                  |