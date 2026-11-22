# UserEventPayload431Next

Mirrors the `security-review` setting value in `@api/api-settings`.

## Example Usage

```typescript
import { UserEventPayload431Next } from "@vercel/sdk/models/threehundredandeightytwo.js";

let value: UserEventPayload431Next = {
  enabled: false,
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