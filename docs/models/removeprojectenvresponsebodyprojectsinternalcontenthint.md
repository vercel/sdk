# RemoveProjectEnvResponseBodyProjectsInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { RemoveProjectEnvResponseBodyProjectsInternalContentHint } from "@vercel/sdk/models/removeprojectenvop.js";

let value: RemoveProjectEnvResponseBodyProjectsInternalContentHint = {
  encryptedValue: "<value>",
  type: "flags-secret",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `encryptedValue`                                                                                                                                               | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                                   |
| `type`                                                                                                                                                         | [models.RemoveProjectEnvResponseBodyProjectsResponse200ApplicationJson2Type](../models/removeprojectenvresponsebodyprojectsresponse200applicationjson2type.md) | :heavy_check_mark:                                                                                                                                             | N/A                                                                                                                                                            |