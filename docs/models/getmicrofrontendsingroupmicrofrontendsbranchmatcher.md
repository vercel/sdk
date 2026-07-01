# GetMicrofrontendsInGroupMicrofrontendsBranchMatcher

## Example Usage

```typescript
import { GetMicrofrontendsInGroupMicrofrontendsBranchMatcher } from "@vercel/sdk/models/getmicrofrontendsingrouplastrollbacktarget.js";

let value: GetMicrofrontendsInGroupMicrofrontendsBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                    | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                   | [models.GetMicrofrontendsInGroupMicrofrontendsResponse200ApplicationJSONResponseBodyType](../models/getmicrofrontendsingroupmicrofrontendsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                                                                       | The type of matching to perform                                                                                                                                                          |
| `pattern`                                                                                                                                                                                | *string*                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                |