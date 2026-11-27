# UserEventPayload437Next

Mirrors the `security-review` setting value in `@api/api-settings`.

## Example Usage

```typescript
import { UserEventPayload437Next } from "@vercel/sdk/models/threehundredandeightysix.js";

let value: UserEventPayload437Next = {
  enabled: true,
  projectScope: "all",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `enabled`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectIds`                                                                     | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `projectScope`                                                                   | [models.UserEventPayloadProjectScope](../models/usereventpayloadprojectscope.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `repositoryScope`                                                                | [models.RepositoryScope](../models/repositoryscope.md)                           | :heavy_minus_sign:                                                               | N/A                                                                              |