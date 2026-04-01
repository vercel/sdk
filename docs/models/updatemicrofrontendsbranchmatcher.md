# UpdateMicrofrontendsBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { UpdateMicrofrontendsBranchMatcher } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                         | [models.UpdateMicrofrontendsProjectsResponse200Type](../models/updatemicrofrontendsprojectsresponse200type.md) | :heavy_check_mark:                                                                                             | The type of matching to perform                                                                                |
| `pattern`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The pattern to match against branch names                                                                      |