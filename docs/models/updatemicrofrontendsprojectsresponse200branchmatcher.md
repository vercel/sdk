# UpdateMicrofrontendsProjectsResponse200BranchMatcher

## Example Usage

```typescript
import { UpdateMicrofrontendsProjectsResponse200BranchMatcher } from "@vercel/sdk/models/updatemicrofrontendshasprojectsvalue.js";

let value: UpdateMicrofrontendsProjectsResponse200BranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                                                                                                          | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pattern`                                                                                                                                                                      | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The pattern to match against branch names                                                                                                                                      |
| `type`                                                                                                                                                                         | [models.UpdateMicrofrontendsProjectsResponse200ApplicationJSONResponseBodyAliasType](../models/updatemicrofrontendsprojectsresponse200applicationjsonresponsebodyaliastype.md) | :heavy_check_mark:                                                                                                                                                             | The type of matching to perform                                                                                                                                                |