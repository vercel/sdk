# GetProjectsResponseBodyProjectsResponseInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsResponseInternalContentHint } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResponseBodyProjectsResponseInternalContentHint = {
  type: "flags-secret",
  encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                     | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson3ProjectsEnvType](../models/getprojectsresponsebodyprojectsresponse200applicationjson3projectsenvtype.md) | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `encryptedValue`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                                               |