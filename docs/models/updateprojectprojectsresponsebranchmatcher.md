# UpdateProjectProjectsResponseBranchMatcher

## Example Usage

```typescript
import { UpdateProjectProjectsResponseBranchMatcher } from "@vercel/sdk/models/updateprojectresponsebody.js";

let value: UpdateProjectProjectsResponseBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                            | *string*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                   | The pattern to match against branch names                                                                                                                            |
| `type`                                                                                                                                                               | [models.UpdateProjectProjectsResponse200ApplicationJSONResponseBodyTargetsType](../models/updateprojectprojectsresponse200applicationjsonresponsebodytargetstype.md) | :heavy_check_mark:                                                                                                                                                   | The type of matching to perform                                                                                                                                      |