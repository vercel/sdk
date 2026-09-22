# CreateProjectInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { CreateProjectInternalContentHint } from "@vercel/sdk/models/createprojectprojectsresponse200applicationjsonresponsebodytargetstype.js";

let value: CreateProjectInternalContentHint = {
  encryptedValue: "<value>",
  type: "flags-secret",
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `encryptedValue`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                                 |
| `type`                                                                                                                                                       | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyEnvType](../models/createprojectprojectsresponse200applicationjsonresponsebodyenvtype.md) | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |