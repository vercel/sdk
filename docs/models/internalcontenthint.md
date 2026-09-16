# InternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { InternalContentHint } from "@vercel/sdk/models/editprojectenvop.js";

let value: InternalContentHint = {
  encryptedValue: "<value>",
  type: "flags-secret",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `encryptedValue`                                                                                                             | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda. |
| `type`                                                                                                                       | [models.EditProjectEnvProjectsResponseType](../models/editprojectenvprojectsresponsetype.md)                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |