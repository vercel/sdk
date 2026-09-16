# GetMicrofrontendsInGroupMicrofrontendsBranchMatcher

## Example Usage

```typescript
import { GetMicrofrontendsInGroupMicrofrontendsBranchMatcher } from "@vercel/sdk/models/getmicrofrontendsingroupfrom1.js";

let value: GetMicrofrontendsInGroupMicrofrontendsBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                                                | *string*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                                |
| `type`                                                                                                                                                                                                   | [models.GetMicrofrontendsInGroupMicrofrontendsResponse200ApplicationJSONResponseBodyProjectsType](../models/getmicrofrontendsingroupmicrofrontendsresponse200applicationjsonresponsebodyprojectstype.md) | :heavy_check_mark:                                                                                                                                                                                       | The type of matching to perform                                                                                                                                                                          |