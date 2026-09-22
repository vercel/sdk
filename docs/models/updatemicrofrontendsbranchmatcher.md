# UpdateMicrofrontendsBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { UpdateMicrofrontendsBranchMatcher } from "@vercel/sdk/models/updatemicrofrontendshasprojectsvalue.js";

let value: UpdateMicrofrontendsBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                                                    | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                                                | *string*                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                       | The pattern to match against branch names                                                                                                                                                                |
| `type`                                                                                                                                                                                                   | [models.UpdateMicrofrontendsProjectsResponse200ApplicationJSONResponseBodyCustomEnvironmentsType](../models/updatemicrofrontendsprojectsresponse200applicationjsonresponsebodycustomenvironmentstype.md) | :heavy_check_mark:                                                                                                                                                                                       | The type of matching to perform                                                                                                                                                                          |