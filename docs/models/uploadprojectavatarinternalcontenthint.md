# UploadProjectAvatarInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { UploadProjectAvatarInternalContentHint } from "@vercel/sdk/models/uploadprojectavatarprojectsaliasassigned.js";

let value: UploadProjectAvatarInternalContentHint = {
  type: "flags-secret",
  encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                                                                    | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                   | [models.UploadProjectAvatarProjectsResponse200ApplicationJSONResponseBodyEnvType](../models/uploadprojectavatarprojectsresponse200applicationjsonresponsebodyenvtype.md) | :heavy_check_mark:                                                                                                                                                       | N/A                                                                                                                                                                      |
| `encryptedValue`                                                                                                                                                         | *string*                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                       | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                                             |