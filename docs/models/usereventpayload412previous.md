# UserEventPayload412Previous

Mirrors the `security-review` setting value in `@api/api-settings`.

## Example Usage

```typescript
import { UserEventPayload412Previous } from "@vercel/sdk/models/fourhundredandsix.js";

let value: UserEventPayload412Previous = {
  enabled: false,
  projectScope: "selected",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `enabled`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  |
| `projectIds`                                                         | *string*[]                                                           | :heavy_minus_sign:                                                   | N/A                                                                  |
| `projectScope`                                                       | [models.PayloadProjectScope](../models/payloadprojectscope.md)       | :heavy_check_mark:                                                   | N/A                                                                  |
| `repositoryScope`                                                    | [models.PayloadRepositoryScope](../models/payloadrepositoryscope.md) | :heavy_minus_sign:                                                   | N/A                                                                  |