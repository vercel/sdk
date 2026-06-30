# GetProjectsResponseBodyInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { GetProjectsResponseBodyInternalContentHint } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponsetype.js";

let value: GetProjectsResponseBodyInternalContentHint = {
  type: "flags-secret",
  encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                     | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson1EnvType](../models/getprojectsresponsebodyprojectsresponse200applicationjson1envtype.md) | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `encryptedValue`                                                                                                                                           | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                               |