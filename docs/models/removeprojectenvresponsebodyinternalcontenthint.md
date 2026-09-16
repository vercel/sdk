# RemoveProjectEnvResponseBodyInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { RemoveProjectEnvResponseBodyInternalContentHint } from "@vercel/sdk/models/removeprojectenvop.js";

let value: RemoveProjectEnvResponseBodyInternalContentHint = {
  encryptedValue: "<value>",
  type: "flags-secret",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `encryptedValue`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.   |
| `type`                                                                                                                         | [models.RemoveProjectEnvResponseBodyProjectsResponse200Type](../models/removeprojectenvresponsebodyprojectsresponse200type.md) | :heavy_check_mark:                                                                                                             | N/A                                                                                                                            |