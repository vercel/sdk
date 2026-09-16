# GetProjectsResponseBodyProjectsResponseInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsResponseInternalContentHint } from "@vercel/sdk/models/getprojectslinkprojects6.js";

let value: GetProjectsResponseBodyProjectsResponseInternalContentHint = {
  encryptedValue: "<value>",
  type: "flags-secret",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `encryptedValue`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                                               |
| `type`                                                                                                                                                                     | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson2ProjectsEnvType](../models/getprojectsresponsebodyprojectsresponse200applicationjson2projectsenvtype.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |