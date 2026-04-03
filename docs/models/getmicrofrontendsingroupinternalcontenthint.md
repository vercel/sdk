# GetMicrofrontendsInGroupInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { GetMicrofrontendsInGroupInternalContentHint } from "@vercel/sdk/models/getmicrofrontendsingroupflatratetier.js";

let value: GetMicrofrontendsInGroupInternalContentHint = {
  type: "flags-secret",
  encryptedValue: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [models.GetMicrofrontendsInGroupMicrofrontendsResponse200ApplicationJSONResponseBodyType](../models/getmicrofrontendsingroupmicrofrontendsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                       | N/A                                                                                                                                                                                      |
| `encryptedValue`                                                                                                                                                                         | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                                                             |