# GetMicrofrontendsInGroupInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupInternalContentHint } from "@vercel/sdk/models/getmicrofrontendsingroupgitprovideroptions.js";

let value: GetMicrofrontendsInGroupInternalContentHint = {
  encryptedValue: "<value>",
  type: "flags-secret",
};
```

## Fields

| Field                                                                                                                                                                                                          | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `encryptedValue`                                                                                                                                                                                               | *string*                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                             | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                                                                                   |
| `type`                                                                                                                                                                                                         | [models.GetMicrofrontendsInGroupMicrofrontendsResponse200ApplicationJSONResponseBodyProjectsEnvType](../models/getmicrofrontendsingroupmicrofrontendsresponse200applicationjsonresponsebodyprojectsenvtype.md) | :heavy_check_mark:                                                                                                                                                                                             | N/A                                                                                                                                                                                                            |