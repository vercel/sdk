# GetProjectsResponseBodyProjectsInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsInternalContentHint } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsResponseBodyProjectsInternalContentHint = {
  type: "flags-secret",
  encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                               | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson2Type](../models/getprojectsresponsebodyprojectsresponse200applicationjson2type.md) | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |
| `encryptedValue`                                                                                                                                     | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                         |