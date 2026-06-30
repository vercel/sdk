# UpdateMicrofrontendsBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { UpdateMicrofrontendsBranchMatcher } from "@vercel/sdk/models/updatemicrofrontendsjobstatus.js";

let value: UpdateMicrofrontendsBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                                                                   | [models.UpdateMicrofrontendsProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/updatemicrofrontendsprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                                       | The type of matching to perform                                                                                                                                                                          |
| `pattern`                                                                                                                                                                                                | *string*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                                |