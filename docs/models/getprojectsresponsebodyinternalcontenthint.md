# GetProjectsResponseBodyInternalContentHint

Similar to `contentHints`, but should not be exposed to the user.

## Example Usage

```typescript
import { GetProjectsResponseBodyInternalContentHint } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson1securitymanagedrulesaibotsaction.js";

let value: GetProjectsResponseBodyInternalContentHint = {
  encryptedValue: "<value>",
  type: "flags-secret",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `encryptedValue`                                                                                                                                   | *string*                                                                                                                                           | :heavy_check_mark:                                                                                                                                 | Contains the `value` of the env variable, encrypted with a special key to make decryption possible in the subscriber Lambda.                       |
| `type`                                                                                                                                             | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJSONType](../models/getprojectsresponsebodyprojectsresponse200applicationjsontype.md) | :heavy_check_mark:                                                                                                                                 | N/A                                                                                                                                                |